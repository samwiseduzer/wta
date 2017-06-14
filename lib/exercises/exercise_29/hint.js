const chalk = require('chalk')
    ;

module.exports = function(){
    console.log(chalk.yellow(
        `
        1) Remember that strings are immutable in javascript
        2) Make sure that the final value is stated on the same line after the "return" keyword
        `
    ));
    process.exit();
};