const chalk = require('chalk');

module.exports = function(){
    console.log(chalk.yellow(
        `EXERCISE 26:

        Write a function called "isPalindrome" that takes a parameter called "str" and returns whether "str" is a palindrome without respect to punctuation, spaces, or capitalization.
        
        For example:

        isPalindrome("Tacocat .") should return true
        isPalindrome("Niagara") should return false
        isPalindrome("T ac' ocat.   ") should return true
         `
    ));
    process.exit();
};