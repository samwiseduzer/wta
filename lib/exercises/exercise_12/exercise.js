const chalk = require('chalk');

module.exports = function(){
    console.log(chalk.yellow(
        `EXERCISE 12:

        Write a function called "getAppearances" that takes two parameters called "arr" and "input" and returns the total number of times "input" appears in "arr";
        
        For example:

        getAppearances([1,2,3,2,6,2],2) should return 3
        getAppearances([1,2,3,4],5) should return 0
        getAppearances(['eeny','meeny','miney','moe'],'moe') should return 1
        `
    ));
    process.exit();
};