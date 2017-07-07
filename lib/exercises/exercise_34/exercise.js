const chalk = require('chalk');

module.exports = function(){
    console.log(chalk.yellow(
        `EXERCISE 34:

        This and the next few node exercises are going to be a little different - instead of you writing a function to solve a problem and us testing your solution, we're going to solve a problem and you're going to test our solutions.
        In order to test our solutions (we'll write several - some good and many bad), you'll make use of the Jasmine testing syntax found at jasmine.github.io.
        When you submit your tests, we'll run them against our solutions and see if the tests pass and fail when they should. 
        Some of these problems may look a little familiar...

        Write a test suite and specs to test a function called "isValidNumber()" 
        "isValidNumber" takes a string parameter called "number" and returns whether that string is a valid Irish Mobile Phone Number

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