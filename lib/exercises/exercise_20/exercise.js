const chalk = require('chalk');

module.exports = function(){
    console.log(chalk.yellow(
        `EXERCISE 20:

        Write a small function called "randFilteredElem" that takes the parameters of "arr" and "filter" and returns a random element from "arr" that isn't equal to the "filter" parameter.
        
        For example:

        randFilteredElem([0,10],10) should only return 0
        randFilteredElem([1,2,3,4,5],6) should eventually return all the values 1,2,3,4, and 5 after repeated calls
        randFilteredElem(["sam","steve","jane",null],"steve") should eventually return only the values "sam","jane", and null after repeated calls
         `
    ));
    process.exit();
};