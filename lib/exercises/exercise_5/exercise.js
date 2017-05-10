const chalk = require('chalk');

module.exports = function(){
    console.log(chalk.yellow(
        `EXERCISE 5:

        Write a small function called "isMultipleOf" that takes a parameter called "base" and a number called "factor" and returns whether (true/false) the "base" is a multiple of the "factor".
        
        For example:

        isMultipleOf(3,1) should return true
        isMultipleOf(5,2) should return false
        isMultipleOf(49,7) should return true
         `
    ));
    process.exit();
};