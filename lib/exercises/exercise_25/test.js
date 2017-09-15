const test = require('../../test');

module.exports = function(argv) {
	let options = {
		fnName: 'toTitleCase',
		esVersion: 5,
		allowHigherOrderFns: false
	};
	let test1 = {
		input: 'toTitleCase("A new sentence.")',
		expected: 'A New Sentence.'
	};
	let test2 = {
		input: 'toTitleCase("bob")',
		expected: 'Bob'
	};
	let test3 = {
		input: 'toTitleCase("a BORING Sentence.")',
		expected: 'A Boring Sentence.'
	};
	test(argv, [test1, test2, test3], options);
};
