const chalk = require('chalk');

module.exports = function() {
	console.log(
		chalk.yellow(
			`
		1) Follow the directions as written - it lays-out the important steps in-order
		2) Using "this" in prototype methods refers to the particular instance calling that method.
			This can be especially useful when referring to the size of the List instance as "this.size"
				inside of the add() and remove() methods.
		3) Removing can be tricky - use a for-loop starting at the removed index + 1
		4) You can remove properties with the "delete" keyword
        `
		)
	);
	process.exit();
};
