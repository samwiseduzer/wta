const test = require('../../test');

module.exports = function(argv) {
	let options = {
		fnName: 'fifthOdd',
		esVersion: 5,
		allowHigherOrderFns: false
	};
	let test1 = {
		input: 'fifthOdd(1)',
		expected: 9
	};
	let test2 = {
		input: 'fifthOdd(2)',
		expected: 11
	};
	let test3 = {
		input: 'fifthOdd(3)',
		expected: 11
	};
	let test4 = {
		input: 'fifthOdd(4)',
		expected: 13
	};
	test(argv, [test1, test2, test3, test4], options);
};
