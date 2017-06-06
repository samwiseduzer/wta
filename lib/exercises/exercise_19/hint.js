const chalk = require('chalk');

module.exports = function(){
    console.log(chalk.yellow(
        `
        1) Look at the previous 2 node exercises
        2) Make sure that the final value is stated on the same line after the "return" keyword
        `
    ));
    process.exit();
};