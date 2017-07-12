const chalk = require('chalk');

module.exports = {
    test: test,
    genResultStr: genResultStr
};

function test(vm,test,criteria,exercise,submission){
    return new Promise((resolve,reject) => {
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
    });
}

function genResultStr(results,testIdx){
    if(results.pass){
        console.log(chalk.green(`TEST ${testIdx+1}: PASSED! (${results.input} === ${JSON.stringify(results.expected)})`));
    }
    else{
        console.log(chalk.red(
            `TEST ${testIdx+1}: FAILED! ${results.input} 
                Expected (${JSON.stringify(results.expected)})<${typeof results.expected}>, but got (${results.result})<${typeof results.result}> instead`));
    }
}