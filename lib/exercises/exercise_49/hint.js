const chalk = require('chalk');

module.exports = function() {
	console.log(
		chalk.yellow(
			`
		1) 2D (or 2-dimensional) arrays are arrays that hold arrays. If arr is a 2D array, 
			to access the first element of the first array inside arr, I would write the following:
				arr[0][0];
		2) You will not be able to simply sum all elements - you'll have to check whether there's even a 
			value there before summing it
        `
		)
	);
	process.exit();
};
