const test = require('../../test');

module.exports = function(argv) {
	let options = {
		fnName: 'isMultipleOf',
		esVersion: 5,
		allowHigherOrderFns: false
	};
	let test1 = {
		input: 'isMultipleOf(1,3)',
		expected: false
	};
	let test2 = {
		input: 'isMultipleOf(50,5)',
		expected: true
	};
	let test3 = {
		input: 'isMultipleOf(49,7)',
		expected: true
	};
	test(argv, [test1, test2, test3], options);
};
