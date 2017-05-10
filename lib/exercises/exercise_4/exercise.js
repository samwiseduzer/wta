const chalk = require('chalk');

module.exports = function(){
    console.log(chalk.yellow(
        `EXERCISE 4:

        Write a function called "larger" that takes two parameters called "firstNum" and "secondNum" and returns the larger number.
        
        For example:

        larger(59,32) should return 59
        larger(60,78) should return 78
        larger(95,95) should return 95
         `
    ));
    process.exit();
};