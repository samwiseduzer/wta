const test = require('../../test');

module.exports = function(argv) {
	let options = {
		fnName: 'sum2D',
		esVersion: 6,
		allowHigherOrderFns: true
	};

	const tests = [];
	tests.push({
		input: `let arr = []; sum2D(arr)`,
		expected: 0
	});
	tests.push({
		input: `arr = [[]]; sum2D(arr)`,
		expected: 0
	});
	tests.push({
		input: `arr = [[],[]]; sum2D(arr)`,
		expected: 0
	});
	tests.push({
		input: `arr = [[null],[null]]; sum2D(arr)`,
		expected: 0
	});
	tests.push({
		input: `arr = [[0,null],[0,0,1,-1]]; sum2D(arr)`,
		expected: 0
	});
	tests.push({
		input: `arr = [[1,1],[1,1,1]]; sum2D(arr)`,
		expected: 5
	});
	tests.push({
		input: `arr = [[5,-17],[null]]; sum2D(arr)`,
		expected: -12
	});

	test(argv, tests, options);
};
