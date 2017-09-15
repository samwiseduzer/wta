const chalk = require('chalk');

module.exports = function() {
	console.log(
		chalk.yellow(
			`
		1) You'll have to create your own parameters
		2) Remember that constructor functions do not return anything
        `
		)
	);
	process.exit();
};
