const chalk = require('chalk');

module.exports = function() {
	console.log(
		chalk.yellow(
			`
		1) Inheriting ES2015 classes is easy - google it
		2) To use an inherited class' constructor, call the super() function
        `
		)
	);
	process.exit();
};
