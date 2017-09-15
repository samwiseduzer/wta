const test = require('../../test');

module.exports = function(argv) {
	let options = {
		fnName: 'getSum',
		esVersion: 5,
		allowHigherOrderFns: false
	};
	let test1 = {
		input: 'getSum([3,4,5])',
		expected: 12
	};
	let test2 = {
		input: 'getSum([2,2,2])',
		expected: 6
	};
	let test3 = {
		input: 'getSum([-5,-7,-9])',
		expected: -21
	};
	test(argv, [test1, test2, test3], options);
};
