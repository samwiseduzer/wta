const chalk = require('chalk');

module.exports = function(){
    console.log(chalk.yellow(
        `EXERCISE 15:

        Write a small function called "getSmallest" that takes a parameter called "arr" and returns the smallest of all the numbers in "arr".
        
        For example:

        getSmallest([1,2,3]) should return 1
        getSmallest([-5,100,-7]) should return -7
        getSmallest([1,0,3,2]) should return 0
         `
    ));
    process.exit();
};