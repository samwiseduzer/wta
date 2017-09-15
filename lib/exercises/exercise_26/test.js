const test = require('../../test');

module.exports = function(argv) {
	let options = {
		fnName: 'isPalindrome',
		esVersion: 5,
		allowHigherOrderFns: false
	};
	let test1 = {
		input: 'isPalindrome("Tacocat .")',
		expected: true
	};
	let test2 = {
		input: 'isPalindrome("Niagara")',
		expected: false
	};
	let test3 = {
		input: 'isPalindrome("T ac? ocat.   ")',
		expected: true
	};
	test(argv, [test1, test2, test3], options);
};
