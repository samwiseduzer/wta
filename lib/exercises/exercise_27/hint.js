const chalk = require('chalk')
    ;

module.exports = function(){
    console.log(chalk.yellow(
        `
        1) Remember that strings are immutable in javascript
        2) Notice how the hyphens will all need to be placed only where there's a capital letter
        3) Consider iterating backwards over the string
        4) Make sure that the final value is stated on the same line after the "return" keyword
        `
    ));
    process.exit();
};