const chalk = require('chalk')
    ;

module.exports = function(){
    console.log(chalk.yellow(
        `
        1) Remember that strings are immutable in javascript
        2) Write MANY LITTLE functions to break up your code and keep it simple - you'll need all sorts of little functions like "isLetter" and "isCapitalized" and "isNumber"
        3) Consider iterating backwards through an array of digits
        4) Try to transform your array of numbers in a single pass
        5) Instead of turning into a string and adding the digits, when a number is >= 10, subtracting 9 is exactly the same
        6) Make sure that the final value is stated on the same line after the "return" keyword
        `
    ));
    process.exit();
};