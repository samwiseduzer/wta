const chalk = require("chalk");

module.exports = function() {
  console.log(
    chalk.yellow(
      `EXERCISE 18:

        Write a small function called "randNum" that takes the parameters of "min" and "max" and returns a random integer from "min" to "max" (inclusive).

        For example:

        randNum(0,10) should only return integers between 0 and 10 (including 0 and 10)
        randNum(10,10) should only return 10
        randNum(5,10) should only return integers between 5 and 10 (including 5 and 10)
         `
    )
  );
  process.exit();
};
