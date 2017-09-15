const chalk = require('chalk');

module.exports = function() {
	console.log(
		chalk.yellow(
			`
		1) 2D (or 2-dimensional) arrays are arrays that hold arrays. If arr is a 2D array, 
			to access the first element of the first array inside arr, I would write the following:
				arr[0][0];
		2) Building a 2D array is VERY similar to reading one, except that the lengths of the array are defined by input
        `
		)
	);
	process.exit();
};
