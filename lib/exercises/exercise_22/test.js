const test = require('../../test');

module.exports = function(argv) {
	let options = {
		fnName: 'reverse',
		esVersion: 5,
		allowHigherOrderFns: false
	};
	let test1 = {
		input: 'reverse("tacocat")',
		expected: 'tacocat'
	};
	let test2 = {
		input: 'reverse("taco")',
		expected: 'ocat'
	};
	let test3 = {
		input: 'reverse("An incomplete sentence.")',
		expected: '.ecnetnes etelpmocni nA'
	};
	test(argv, [test1, test2, test3], options);
};
