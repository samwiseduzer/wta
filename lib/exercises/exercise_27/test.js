const test = require('../../test');

module.exports = function(argv) {
	let options = {
		fnName: 'camelToKabob',
		esVersion: 5,
		allowHigherOrderFns: false
	};
	let test1 = {
		input: 'camelToKabob("aVariableName")',
		expected: 'a-variable-name'
	};
	let test2 = {
		input: 'camelToKabob("bob")',
		expected: 'bob'
	};
	let test3 = {
		input: 'camelToKabob("bobsUsedBookStore")',
		expected: 'bobs-used-book-store'
	};
	test(argv, [test1, test2, test3], options);
};
