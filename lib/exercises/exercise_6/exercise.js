const chalk = require('chalk');

module.exports = function(){
    console.log(chalk.yellow(
        `EXERCISE 6:

        Write a small function called "grade" that takes a parameter called "score" and returns the grade that corresponds to that "score".

        Grading Table:
            0-59: 'F'
            60-69: 'D'
            70-79: 'C'
            80-89: 'B'
            90-100: 'A'
        
        For example:

        grade(3) should return 'F'
        grade(89) should return 'B'
        grade(90) should return 'A'
         `
    ));
    process.exit();
};