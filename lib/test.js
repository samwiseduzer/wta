const assert = require('assert'),
     {VM} = require('vm2'),
     fs = require('fs-extra'),
     Util = require('./util'),
     chalk = require('chalk'),
     validator = require('./validate.js');

module.exports = function(argv,test1,test2,test3){
    let fnName = require(`./exercises/exercise_${argv[1]}/data.js`).fnName;
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
        let results = [result1,result2,result3];
        for(var i = 0; i < 3; i++){
            genTestStr(results[i],i);
        }
    }
};

function runTest(vm,test){
    let result = vm.run(test.input);
    return {
        input: test.input,
        result: result,
        pass: result === test.expected,
        expected: test.expected
    };
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
