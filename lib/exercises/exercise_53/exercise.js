const chalk = require('chalk');

module.exports = function() {
  console.log(
    chalk.yellow(
      `EXERCISE 53:

		Create a function called "mean" that takes any number of numeric parameters and returns their average.

        For example:

		mean() should return 0

		mean(3) should return 1

		mean(1,2) should return 1.5

		mean(3,4,-1,19,0) should return 5
        `
    )
  );
  process.exit();
};
