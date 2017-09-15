const test = require('../../test');

module.exports = function(argv) {
	let options = {
		classes: ['Person'],
		esVersion: 6,
		allowHigherOrderFns: false,
		syntaxReqs: {
			required: [{ name: 'class' }],
			forbidden: [{ name: 'prototype' }, { name: '+' }]
		}
	};

	const tests = [];
	tests.push({
		input: `new Person('steve',155,42)`,
		expected: { name: 'steve', weight: 155, age: 42, isAlive: true }
	});
	tests.push({
		input: `new Person('sally',105,420)`,
		expected: { name: 'sally', weight: 105, age: 420, isAlive: true }
	});
	tests.push({
		input: `const steve = new Person('steve',155,42); steve.greet('Bob')`,
		expected: 'Hi, Bob, my name is steve!'
	});
	tests.push({
		input: `const sally = new Person('sally',105,420); sally.greet('Randy')`,
		expected: 'Hi, Randy, my name is sally!'
	});

	test(argv, tests, options);
};
