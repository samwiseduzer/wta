const chalk = require('chalk');

module.exports = function(){
    console.log(chalk.yellow(
        `
        1) Look at the previous 3 node exercises
        2) Consider using a while loop to keep generating random indices until the resulting element isn't filtered
        3) Make sure that the final value is stated on the same line after the "return" keyword
        `
    ));
    process.exit();
};