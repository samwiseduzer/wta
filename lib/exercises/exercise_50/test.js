const test = require('../../test');

module.exports = function(argv) {
	let options = {
		fnName: 'build2D',
		esVersion: 6,
		allowHigherOrderFns: true
	};

	const tests = [];
	tests.push({
		input: `build2D(0)`,
		expected: []
	});
	tests.push({
		input: `build2D(1)`,
		expected: [[1]]
	});
	tests.push({
		input: `build2D(2)`,
		expected: [[1, 2], [3, 4]]
	});
	tests.push({
		input: `build2D(3)`,
		expected: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
	});
	tests.push({
		input: `build2D(8)`,
		expected: [
			[1, 2, 3, 4, 5, 6, 7, 8],
			[9, 10, 11, 12, 13, 14, 15, 16],
			[17, 18, 19, 20, 21, 22, 23, 24],
			[25, 26, 27, 28, 29, 30, 31, 32],
			[33, 34, 35, 36, 37, 38, 39, 40],
			[41, 42, 43, 44, 45, 46, 47, 48],
			[49, 50, 51, 52, 53, 54, 55, 56],
			[57, 58, 59, 60, 61, 62, 63, 64]
		]
	});

	test(argv, tests, options);
};
