const chalk = require('chalk');

module.exports = function() {
	console.log(
		chalk.yellow(
			`
        1) Remember that strings are immutable in javascript
        2) Write MANY LITTLE functions to break up your code and keep it simple 
        3) Every character in a string has a numerical value called its "character code". Consider using the .charCodeAt() method to determine the value of the letter
        4) Make sure that the final value is stated on the same line after the "return" keyword
        `
		)
	);
	process.exit();
};
