const chalk = require('chalk');

module.exports = function() {
	console.log(
		chalk.yellow(
			`
		1) Try checking to see if a word is in your object already - what do you need to do if it isn't? What should you do if it is?
		2) While known object keys are usually referenced using a "." (i.e. someObject.someProperty), unknown, or dynamic, keys such as variables must be entered inside []'s instead
        `
		)
	);
	process.exit();
};
