const test = require('../../test');

module.exports = function(argv) {
	let options = {
		fnName: 'Animal',
		esVersion: 5,
		allowHigherOrderFns: false
	};

	const tests = [];
	tests.push({
		input: `new Animal('Red Fox','vulpes vulpes','vulpes','canidae',10,'red')`,
		expected: {
			informalSpecies: 'Red Fox',
			species: 'vulpes vulpes',
			genus: 'vulpes',
			family: 'canidae',
			weight: 10,
			color: 'red',
			extinct: false
		}
	});
	tests.push({
		input: `new Animal('Red Fox','vulpes vulpes','vulpes','canidae',12,'purple')`,
		expected: {
			informalSpecies: 'Red Fox',
			species: 'vulpes vulpes',
			genus: 'vulpes',
			family: 'canidae',
			weight: 12,
			color: 'purple',
			extinct: false
		}
	});
	tests.push({
		input: `new Animal('Human','h. sapiens','homo','hominidae',160,'green')`,
		expected: {
			informalSpecies: 'Human',
			species: 'h. sapiens',
			genus: 'homo',
			family: 'hominidae',
			weight: 160,
			color: 'green',
			extinct: false
		}
	});

	test(argv, tests, options);
};
