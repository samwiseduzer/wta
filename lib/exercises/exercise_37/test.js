const test = require('../../test');

module.exports = function(argv) {
	let options = {
		fnName: 'genObituary',
		esVersion: 5,
		allowHigherOrderFns: false
	};

	const tests = [];
	tests.push({
		input: 'genObituary({firstName: "Larry", lastName: "Fine", birthYear: 1868, deathYear: 1897})',
		expected: 'Larry Fine: lived 29 years.'
	});
	tests.push({
		input: 'genObituary({firstName: "Curly", lastName: "Howard", birthYear: 1902, deathYear: 2007})',
		expected: 'Curly Howard: lived 105 years.'
	});
	tests.push({
		input: 'genObituary({firstName: "Moe", lastName: "Howard", birthYear: 2003, deathYear: 2127})',
		expected: 'Moe Howard: lived 124 years.'
	});

	test(argv, tests, options);
};
