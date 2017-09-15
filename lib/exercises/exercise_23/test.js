const test = require('../../test');

module.exports = function(argv) {
	let options = {
		fnName: 'reverseWords',
		esVersion: 5,
		allowHigherOrderFns: false
	};
	let test1 = {
		input: 'reverseWords("some reversed words.")',
		expected: 'emos desrever .sdrow'
	};
	let test2 = {
		input: 'reverseWords("A short")',
		expected: 'A trohs'
	};
	let test3 = {
		input: 'reverseWords("tacocat 4 life")',
		expected: 'tacocat 4 efil'
	};
	test(argv, [test1, test2, test3], options);
};
