const chalk = require('chalk')
    ;

module.exports = function(){
    console.log(chalk.yellow(
        `
        1) Try googling along the lines of "compare numbers in javascript"
        2) Make sure that the larger value is stated on the same line after the "return" keyword
        `
    ));
    process.exit();
};