const chalk = require('chalk');

module.exports = function(){
    console.log(chalk.yellow(
        `EXERCISE 13:

        Write a small function called "getSum" that takes a parameter called "arr" and returns the sum of all the values in "arr".
        
        For example:

        getSum([1,2,3]) should return 6
        getSum([3,3,3]) should return 9
        getSum([-1,0,-3,2]) should return -2
         `
    ));
    process.exit();
};