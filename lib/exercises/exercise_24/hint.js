const chalk = require('chalk');

module.exports = function(){
    console.log(chalk.yellow(
        `
        1) Remember that strings are "immutable", which means they can't be changed. You'll want to build a new string.
        2) Think about how you could make use of the .split() string method
        3) Make sure that the final value is stated on the same line after the "return" keyword
        `
    ));
    process.exit();
};