const chalk = require('chalk')
    ;

module.exports = function(){
    console.log(chalk.yellow(
        `
        1) Try googling along the lines of "js add strings together", "js add variable to string", or "js string concatenation"
        2) Make sure that the greeting is stated on the same line after the "return" keyword
        `
    ));
    process.exit();
};