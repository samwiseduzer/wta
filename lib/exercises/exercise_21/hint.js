const chalk = require('chalk')
    ;

module.exports = function(){
    console.log(chalk.yellow(
        `
        1) Consider using "Number.NEGATIVE_INFINITY" as your initial value for your running largest & second largest values
        2) Make sure that the final value is stated on the same line after the "return" keyword
        `
    ));
    process.exit();
};