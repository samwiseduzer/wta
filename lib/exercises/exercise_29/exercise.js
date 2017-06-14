const chalk = require('chalk');

module.exports = function(){
    console.log(chalk.yellow(
        `EXERCISE 29:

        Write a function called "isValidPhone" that takes a parameter called "number" and returns whether it is a correctly-formatted irish mobile phone number.

        Valid phone numbers are comprised of 10 numerical digits.
        Valid phone numbers all begin with "08", followed by either a 3, 5, 6, or 7 and then 7 other digits.

        For example:

        isValidPhone("0877654233") should return true
        isValidPhone("0737654233") should return false //doesn't begin with 08
        isValidPhone("08576542336") should return false //wrong number of digits
        isValidPhone("0827654233") should return false //third digit isn't in (3,5,6,7)  
         `
    ));
    process.exit();
};