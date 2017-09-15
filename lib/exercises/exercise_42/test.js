const test = require('../../test');

module.exports = function(argv) {
	let options = {
		fnName: 'Animal',
		esVersion: 5,
		allowHigherOrderFns: false
	};

	const tests = [];
	tests.push({
		input: `new Animal('Red Fox','vulpes vulpes','vulpes','canidae',10,'red','bark')`,
		expected: {
			informalSpecies: 'Red Fox',
			species: 'vulpes vulpes',
			genus: 'vulpes',
			family: 'canidae',
			weight: 10,
			color: 'red',
			sound: 'bark',
			extinct: false
		}
	});
	tests.push({
		input: `(new Animal('Red Fox','vulpes vulpes','vulpes','canidae',10,'red','bark')).makeSound()`,
		expected: 'bark, bark!'
	});

	test(argv, tests, options);
};
