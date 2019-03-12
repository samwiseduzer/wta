const chalk = require('chalk');

module.exports = function() {
  console.log(
    chalk.yellow(
      `EXERCISE 52:

		Create a function called "sum" that takes any number of numeric parameters and returns their sum.

        For example:

		sum() should return 0

		sum(1) should return 1

		sum(1,2) should return 3

		sum(3,4,-1,19) should return 25
        `
    )
  );
  process.exit();
};
