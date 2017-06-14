const chalk = require('chalk');

module.exports = function(){
    console.log(chalk.yellow(
        `
        1) Try googling along the lines of "concatenate strings in javascript" or "how to add strings js"
        2) Make sure that the final value of the square is stated on the same line after the "return" keyword
        `
    ));
    process.exit();
};