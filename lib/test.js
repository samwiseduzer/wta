const assert = require('assert'),
     {VM} = require('vm2'),
     fs = require('fs-extra'),
     Util = require('./util'),
     chalk = require('chalk'),
     validator = require('./validate.js'),
     path = require('path'),
     testTypes = {
         equals: require('./test_types/equal'),
         jasmine: require('./test_types/jasmine'),
         spread: require('./test_types/spread')
     };

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
                        for(let i = 0; i < tests.length; i++){
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
};

function runTest(vm,test,criteria,exercise,submission){
    return new Promise(
       (resolve, reject) => {
            testTypes[test.type && test.type.name ? test.type.name : 'equals'].test(vm,test,criteria,exercise,submission)
                .then((result) => resolve(result))
                .catch((err) => reject(err));
        }
    );
}

function displayResults(results){
    for(let i = 0; i < results.length; i++){
        testTypes[results[i].type].genResultStr(results[i],i);
    }
}
