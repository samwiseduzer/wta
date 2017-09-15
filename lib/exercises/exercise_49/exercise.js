const chalk = require('chalk');

module.exports = function() {
	console.log(
		chalk.yellow(
			`EXERCISE 49:

		Create a function called "sum2D" that takes a parameter called arr, which is a 2D array (an array that holds arrays) 
			that returns the sum of all numbers in the 2D array. All elements of the inner arrays will hold either null
			or a number.

        For example:
        
        const arr1 = [
			[1,2],
			[34,0]
		];
		sum2D(arr1) should equal 37

		const arr2 = [
			[999,null],
			[],
			[56,0,-1],
			[null,null,null,null]
		];
		sum2D(arr2) should equal 1054

		const arr3 = [
			[]
		]
		sum2D(arr3) should equal 0;

		const arr4 = [
			[null,null],
			[null,null]
		];
		sum2D(arr4) should equal 0;
        `
		)
	);
	process.exit();
};
