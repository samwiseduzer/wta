const assert = require('assert'),
     {VM} = require('vm2'),
     fs = require('fs-extra'),
     Util = require('./util'),
     chalk = require('chalk'),
     validator = require('./validate.js');

module.exports = function(argv,test1,test2,test3,options){
    let fnName = options ? options.fnName : '';
    if(argv.length >= 3){
        let filePath = process.cwd() + '/' + argv[2];
        validateCode(filePath,`File does not exist: ${argv[2]}`,fnName);
    }
    else{
        let filePath = process.cwd() + '/exercise' + argv[1] + '.js';
        validateCode(filePath,`File does not exist: ${filePath}
                    
Either run "wta gen ${argv[1]}" to automatically create the file or create it yourself and run "wta test ${argv[1]} <YOUR_FILE_NAME_HERE>"`,fnName);
    }

    function validateCode(filepath,err,fnName){
        validator(filepath,err,fnName,function(error,result){
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
                let vm = new VM({timeout: 10});
                try{
                    vm.run(str);
                    displayResults(runTest(vm,test1),runTest(vm,test2),runTest(vm,test3));
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
    function displayResults(result1,result2,result3){
        let results = [];
        if(result1){
            results.push(result1);
            if(result2){
                results.push(result2);
                if(result3){
                    results.push(result3);
                }
            }
        }
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

function runTest(vm,test,criteria){
    if(!test.type || test.type.name === 'equals'){
        let result = vm.run(test.input);
        return {
            input: test.input,
            result: result,
            pass: result === test.expected,
            expected: test.expected,
            type: 'equals'
        };
    }
    else if(test.type && test.type.name === 'spread'){
        return runSpreadTest(vm,test);
    }
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
        console.log(chalk.green(`TEST ${i+1}: PASSED! (${results.input} === ${results.expected})`));
    }
    else{
        console.log(chalk.red(
            `TEST ${i+1}: FAILED! ${results.input} 
                Expected (${results.expected})<${typeof results.expected}>, but got (${results.result})<${typeof results.result}> instead`));
    }
}
