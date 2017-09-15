const chalk = require('chalk');

module.exports = function() {
	console.log(
		chalk.yellow(
			`
		1) This is virtually the same exercise 39, but with strings
		2) Consider creating a lower-case version of the input string before doing anything else
        `
		)
	);
	process.exit();
};
