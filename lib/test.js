const assert = require('assert'),
     {NodeVM} = require('vm2'),
     {VM} = require('vm2'),
     fs = require('fs-extra'),
     Util = require('./util'),
     chalk = require('chalk'),
     validator = require('./validate.js'),
     path = require('path');

module.exports = function(argv,tests,options){
    let fnName = options ? options.fnName : '';
    if(argv.length >= 3){
        let filePath = process.cwd() + '/' + argv[2];
        validateCode(filePath,`File does not exist: ${argv[2]}`,options);
    }
    else{
        let filePath = process.cwd() + '/exercise' + argv[1] + '.js';
        validateCode(filePath,`File does not exist: ${filePath}
                    
Either run "wta gen ${argv[1]}" to automatically create the file or create it yourself and run "wta test ${argv[1]} <YOUR_FILE_NAME_HERE>"`,options);
    }

    function validateCode(filepath,err,options){
        validator(filepath,err,options,function(error,result){
            if(error) Util.fatalError('Code has errors that prevent it from being tested');
            runTests(filepath,err);
        });
    }
    function runTests(filepath,err){
        fs.exists(filepath, function(exists){
            if(!exists){
                Util.fatalError(err);
            }
            fs.readFile(filepath, function(err,str){
                const vm = new VM({timeout: 10});
                try{
                    if(!options.isJasmine) vm.run(str);
                    const results = [];
                    const testsArray = buildTestsArr(tests);
                    let promise = chain(testsArray)
                    promise.then(() => displayResults(results));

                    function buildTestsArr(tests){
                        const testsArr = [];
                        for(var i = 0; i < tests.length; i++){
                            testsArr.push({
                                fn: runTest,
                                args: {
                                    vm: vm,
                                    test: tests[i],
                                    criteria: undefined,
                                    exercise: argv[1],
                                    submission: str
                                }
                            });
                        }
                        testsArr.push({
                            fn: () => {},
                            args: {
                                vm: null,
                                test: null,
                                criteria: undefined,
                                exercise: null,
                                submission: null
                            }
                        });
                        return testsArr;
                    }

                    function chain(callbacks, initial) {
                        return callbacks.reduce((prev, next) => {
                            return prev
                            .then((result) => {
                                if(result !== undefined) results.push(result);
                                return next.fn(next.args.vm,next.args.test,next.args.criteria,next.args.exercise,next.args.submission);
                            })
                            .catch((err) => console.error(err));
                        }, Promise.resolve(initial));
                    }
                }
                catch(vm2Err){
                    if(vm2Err.toString().includes('Error: Script execution timed out.')){
                        console.log(chalk.red('Error running code: it looks like you have an infinite loop in your code!'));
                    }
                    else{
                        console.log(chalk.red('Error running code: ', vm2Err));
                    }
                }
            });
        });
    }
    function displayResults(results){
        for(let i = 0; i < results.length; i++){
            if(!results[i].type || results[i].type === 'equals'){
                genTestStr(results[i],i);
            }
            else if(results[i].type && results[i].type === 'spread'){
                genSpreadTestStr(results[i],i);
            }
        }
    }
};

function runTest(vm,test,criteria,exercise,submission){
    return new Promise(
       (resolve, reject) => {
            if(!test.type || test.type.name === 'equals'){
                let result = vm.run(test.input);
                let passed = true;
                if(test.expected.constructor === Array && result.constructor === Array && result.length === test.expected.length){
                    for(let i = 0; i < test.expected.length; i++){
                        if(result[i] !== test.expected[i]){
                            passed = false;
                            break;
                        }
                    }
                }
                else{
                    passed = result === test.expected;
                }
                resolve({
                    input: test.input,
                    result: result,
                    pass: passed,
                    expected: test.expected,
                    type: 'equals'
                });
            }
            else if(test.type && test.type.name === 'spread'){
                resolve(runSpreadTest(vm,test));
            }
            else if(test.type && test.type.name === 'jasmine'){
                runJasmineTest(vm,test,exercise,submission)
                .then(function(result){
                    resolve(result);
                })
                .catch(function(err){
                    reject(err);
                });
            }
        }
    );
}

function runSpreadTest(vm,test){
    let targets = test.type.targets;
    let missing = targets.slice(0);
    let tries = (test.tries || 100);
    let results = {
        input: test.input,
        result: null,
        pass: false,
        expected: test.expected,
        type: 'spread'
    };
    for(let i = 0, result; i < tries; i++){
        result = vm.run(test.input);
        if(!targets.includes(result)){
            results.result = `Output (${result})<${typeof result}> was outside acceptable values`;
            break;
        }
        else if(missing.includes(result)){
            missing.splice(missing.indexOf(result),1);
        }
    }

    if(!results.result && missing.length){
        results.result = `Required value${missing.length > 1 ? 's' : ''} missing: ${missing.length > 1 ? missing.join(',') : missing[0]}`;
    }
    else if(!results.result){
        results.pass = true;
    }

    return results;
}

function runJasmineTest(vm,test,exercise,submission){
    return new Promise((resolve, reject) => {
        const Jasmine = require('jasmine');
        const reporter = {
            jasmineStarted: (data) => console.log('jasmineStarted: ', data),
            suiteStarted: (data) => console.log('suiteStarted: ', data),
            specStarted: (data) => console.log('specStarted: ', data),
            jasmineDone: (data) => {
                console.log('jasmineDone: ', data);
                resolve(data);
            },
            specDone: (data) => console.log('specDone: ', data),
            suiteDone: (data) => console.log('suiteDone: ', data),
            isComplete: (data) => console.log('suiteDone: ', data),
            print: (data) => {}
        };

        Util.readExerciseCode(exercise,test.input,function(err,content){
                    if(err) return console.error(err);
                    const testsWithCode = 
`${content}

${submission}
`;
                    Util.createTempFile(testsWithCode, function(err,name){
                        if(err) return console.error(err);
                        const testVM = new NodeVM({
                            console: 'inherit',
                            sandbox: {
                                Jasmine: Jasmine,
                                reporter: reporter,
                                tempPath: path.join(__dirname, `./temp/test.js`)
                            }
                        });
                        try{
                            const vmCode = `
                                const jasmine = new Jasmine();
                                jasmine.addReporter(reporter);
                                jasmine.configureDefaultReporter(reporter);
                                jasmine.execute([tempPath]);
                            `;
                            testVM.run(vmCode);
                        }
                        catch(e){
                            console.error(e);
                        }
                    });
                });
    });
}

function genSpreadTestStr(results,i){
    if(results.pass){
        console.log(chalk.green(`TEST ${i+1}: PASSED!`));
    }
    else{
        console.log(chalk.red(
            `TEST ${i+1}: FAILED! ${results.input} 
                Expected (${results.expected}), but (${results.result})`));
    }
}

function genTestStr(results,i){
    if(results.pass){
        console.log(chalk.green(`TEST ${i+1}: PASSED! (${results.input} === ${JSON.stringify(results.expected)})`));
    }
    else{
        console.log(chalk.red(
            `TEST ${i+1}: FAILED! ${results.input} 
                Expected (${JSON.stringify(results.expected)})<${typeof results.expected}>, but got (${results.result})<${typeof results.result}> instead`));
    }
}
