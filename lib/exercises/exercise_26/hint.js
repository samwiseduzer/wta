const chalk = require('chalk')
    ;

module.exports = function(){
    console.log(chalk.yellow(
        `
        1) Consider using the split() string method
        2) Try googling "js case-insensitive comparison"
        3) Make sure that the final value is stated on the same line after the "return" keyword
        `
    ));
    process.exit();
};