const chalk = require('chalk');

module.exports = function(){
    console.log(chalk.yellow(
        `EXERCISE 22:

        Write a function called "reverse" that takes a parameter called "str" and returns the string backwards.
        
        For example:

        reverse('cat') should return 'tac'
        reverse('a waffle') should return 'elffaw a'
        reverse('BOB') should return 'BOB'
         `
    ));
    process.exit();
};