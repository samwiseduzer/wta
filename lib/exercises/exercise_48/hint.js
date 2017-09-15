const chalk = require('chalk');

module.exports = function() {
	console.log(
		chalk.yellow(
			`
		1) For the reverse method, think about how you can use pop() to get your List's elements in opposite order
        `
		)
	);
	process.exit();
};
