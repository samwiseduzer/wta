const chalk = require('chalk');

module.exports = function() {
	console.log(
		chalk.yellow(
			`
		1) Classes have a constructor method - if you don't know how to use it, google it
        `
		)
	);
	process.exit();
};
