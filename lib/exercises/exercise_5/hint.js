const chalk = require('chalk')
    ;

module.exports = function(){
    console.log(chalk.yellow(
        `
        1) Try googling along the lines of "is divisible by javascript" or "modulus javascript"
        2) Make sure that the final value is stated on the same line after the "return" keyword
        `
    ));
    process.exit();
};