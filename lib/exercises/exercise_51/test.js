const test = require('../../test');

module.exports = function(argv) {
	let options = {
		fnName: 'build2DWithIdx',
		esVersion: 6,
		allowHigherOrderFns: true
	};

	const tests = [];
	tests.push({
		input: `build2DWithIdx(0)`,
		expected: []
	});
	tests.push({
		input: `build2DWithIdx(1)`,
		expected: [['00']]
	});
	tests.push({
		input: `build2DWithIdx(2)`,
		expected: [['00', '01'], ['10', '11']]
	});
	tests.push({
		input: `build2DWithIdx(3)`,
		expected: [['00', '01', '02'], ['10', '11', '12'], ['20', '21', '22']]
	});

	test(argv, tests, options);
};
