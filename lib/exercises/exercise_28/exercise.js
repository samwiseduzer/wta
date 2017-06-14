const chalk = require('chalk');

module.exports = function(){
    console.log(chalk.yellow(
        `EXERCISE 28:

        Write a function called "sameIngredients" that takes two parameters called "str1" and "str2" and returns true/false whether str1 is composed only of characters found in str2 (case-insensitive).

        For example:

        sameIngredients("bob","jane") should return false
        sameIngredients("Bob","bobby") should return true
        sameIngredients("indy books for sale.","KIND Boars left you alone.") should return true
         `
    ));
    process.exit();
};