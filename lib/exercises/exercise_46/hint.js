const chalk = require('chalk');

module.exports = function() {
	console.log(
		chalk.yellow(
			`
		1) Use ES2015 string interpolation instead of concatenation
        `
		)
	);
	process.exit();
};
