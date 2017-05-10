const chalk = require('chalk');

module.exports = function(){
    console.log(chalk.yellow(
        `EXERCISE 1:

        Write a small function called "square" that takes a parameter called "num" and returns the square of "num".
        
        For example:

        square(3) should return 9
        square(1) should return 1
        square(-1) should return 1
        `
    ));
    process.exit();
};