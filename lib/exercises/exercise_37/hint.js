const chalk = require('chalk');

module.exports = function() {
	console.log(
		chalk.yellow(
			`
        1) This is, essentially, a string concatenation problem
        2) If you're having trouble accessing data from the input person object, lookup "js object dot notation"
        3) Make sure that the final value is stated on the same line after the "return" keyword
        `
		)
	);
	process.exit();
};
