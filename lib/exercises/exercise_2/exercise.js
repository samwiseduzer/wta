const chalk = require('chalk');

module.exports = function(){
    console.log(chalk.yellow(
        `EXERCISE 2:

        Write a function called "hello" that takes a parameter called "name" and returns a string greeting "Hello, <name here>!" with their name replacing <name here>.
        
        For example:

        hello('Sam') should return 'Hello, Sam!'
        hello('Bob Marley') should return 'Hello, Bob Marley!'
        hello('World') should return 'Hello, World!'
        `
    ));
    process.exit();
};