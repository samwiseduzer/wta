const chalk = require('chalk')
    ;

module.exports = function(){
    console.log(chalk.yellow(
        `
        1) Remember that strings are immutable in javascript
        2) Write MANY LITTLE functions to break up your code and keep it simple - you'll need all sorts of little functions like "isLetter" and "isCapitalized" and "isNumber"
        3) Make sure that the final value is stated on the same line after the "return" keyword
        `
    ));
    process.exit();
};