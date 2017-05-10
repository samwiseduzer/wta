const chalk = require('chalk');

module.exports = function(){
    console.log(chalk.yellow(
        `EXERCISE 11:

        Write a function called "avgUpTo100" that takes a parameter called "num" and returns the average of every number from "num" up to, and including, 100. If "num" is greater than 100, return 0;
        
        For example:

        avgUpTo100(3) should return 9
        avgUpTo100(1) should return 1
        avgUpTo100(-1) should return 1
         `
    ));
    process.exit();
};