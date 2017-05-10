const chalk = require('chalk');

module.exports = function(){
    console.log(chalk.yellow(
        `EXERCISE 0:

        Write a small function called "mimic" that takes a parameter called "str" and returns the value of "str" twice.
        
        For example:

        mimic('Hi') should return 'HiHi'
        mimic('Howdy') should return 'HowdyHowdy'
        mimic('') should return ''
        `
    ));
    process.exit();
};