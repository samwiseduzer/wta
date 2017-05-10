const chalk = require('chalk');

module.exports = function(){
    console.log(chalk.yellow(
        `EXERCISE 16:

        Write a small function called "getLongest" that takes a parameter called "arr" and returns the longest string in "arr". If there is a tie, return the first of the longest strings.
        
        For example:

        getLongest(['sam','indubitably','jacob']) should return 'indubitably'
        getLongest(['sam','cam','bob']) should return 'sam'
        getLongest(['','','']) should return ''
         `
    ));
    process.exit();
};