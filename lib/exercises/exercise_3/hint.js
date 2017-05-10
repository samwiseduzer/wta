const chalk = require('chalk')
    ;

module.exports = function(){
    console.log(chalk.yellow(
        `
        1) Try googling along the lines of "js string length"
        2) Make sure that the final string is stated on the same line after the "return" keyword
        `
    ));
    process.exit();
};