const chalk = require('chalk')
    ;

module.exports = function(){
    console.log(chalk.yellow(
        `
        1) Try googling along the lines of "while loop javascript" or "even/odd in javascript"
        2) Make sure that the final value is stated on the same line after the "return" keyword
        `
    ));
    process.exit();
};