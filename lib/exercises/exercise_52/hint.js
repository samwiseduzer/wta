const chalk = require('chalk');

module.exports = function() {
  console.log(
    chalk.yellow(
      `
		1) You'll want to make use of the spread operator for parameters.
        `
    )
  );
  process.exit();
};
