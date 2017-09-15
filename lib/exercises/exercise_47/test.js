const test = require('../../test');

module.exports = function(argv) {
	let options = {
		classes: ['Person', 'Employee'],
		esVersion: 6,
		allowHigherOrderFns: false,
		syntaxReqs: {
			required: [{ name: 'class' }, { name: 'super' }],
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
	tests.push({
		input: `new Employee('randy',105,55000,1999)`,
		expected: {
			name: 'randy',
			weight: 105,
			age: 25,
			isAlive: true,
			salary: 55000,
			startYear: 1999,
			employed: true
		}
	});
	tests.push({
		input: `const bobby = new Employee('bobby',105,55000,1999); bobby.greet('jasmine')`,
		expected: 'Hi, jasmine, my name is bobby!'
	});
	tests.push({
		input: `const gerald = new Employee('gerald',105,55000,1999); gerald.fire(); gerald`,
		expected: {
			name: 'gerald',
			weight: 105,
			age: 25,
			isAlive: true,
			salary: 55000,
			startYear: 1999,
			employed: false
		}
	});

	test(argv, tests, options);
};
