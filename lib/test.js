const assert = require('assert'),
     {VM} = require('vm2'),
     fs = require('fs-extra'),
     Util = require('./util'),
     chalk = require('chalk');

module.exports = function(argv,test1,test2,test3){
    if(argv.length >= 3){
        let filePath = process.cwd() + '/' + argv[2];
        runTests(filePath,`File does not exist: ${argv[2]}`);
    }
    else{
        let filePath = process.cwd() + '/exercise' + argv[1] + '.js';
        runTests(filePath,`File does not exist: ${filePath}
                    
Either run "wta gen ${argv[1]}" to automatically create the file or create it yourself and run "wta test ${argv[1]} <YOUR_FILE_NAME_HERE>"`);
    }
    function runTests(filepath,err){
        fs.exists(filepath, function(exists){
            if(!exists){
                Util.fatalError(err);
            }
            fs.readFile(filepath, function(err,str){
                let vm = new VM({timeout: 10});
                vm.run(str);
                displayResults(runTest(vm,test1),runTest(vm,test2),runTest(vm,test3));
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
