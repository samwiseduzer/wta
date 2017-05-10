const chalk = require('chalk');

module.exports = function(){
    console.log(chalk.yellow(
        `EXERCISE 8:

        Write a small function called "fifthOdd" that takes a parameter called "num" and, starting with input, returns the 5th odd number.
        
        For example:

        fifthOdd(1) should return 9
        fifthOdd(0) should return 9
        fifthOdd(-1) should return 7
         `
    ));
    process.exit();
};