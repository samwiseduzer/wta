const chalk = require('chalk');

module.exports = function(){
    console.log(chalk.yellow(
        `EXERCISE 17:

        Write a small function called "fromOneToTen" that takes no parameters and returns and returns a random number from 1 to 10 (inclusive).
        
        For example:

        fromOneToTen() should never return 0
        fromOneToTen() should return a decimal
        fromOneToTen() can return 10
        fromOneToTen() can return 1
         `
    ));
    process.exit();
};