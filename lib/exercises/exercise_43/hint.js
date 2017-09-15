const chalk = require('chalk');

module.exports = function() {
	console.log(
		chalk.yellow(
			`
		1) You'll have to create your own parameters
		2) Remember that constructor functions do not return anything
		3) To extend another constructor, you may call that constructor inside of the current constructor like so:
			OtherConstructor.call(this,param1,param2,param3);
		4) To inherit another prototype, merely set the prototype of the current constructor to be a new instance of the constructor whose prototype you wish to inherit
			ThisConstructor.prototype = new ThatConstructor();
        `
		)
	);
	process.exit();
};
