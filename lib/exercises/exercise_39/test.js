const test = require('../../test');

module.exports = function(argv) {
	let options = {
		fnName: 'getAppearances',
		esVersion: 5,
		allowHigherOrderFns: false
	};

	const tests = [];
	tests.push({
		input: `getAppearances(['duck','duck','goose'])`,
		expected: { duck: 2, goose: 1 }
	});
	tests.push({
		input: `getAppearances(['duck','Duck','goose'])`,
		expected: { duck: 1, Duck: 1, goose: 1 }
	});
	tests.push({
		input: `getAppearances(['pandemic','pandemic','anachronistic','hooligan','hooligan','anachronistic','hooligan','hooligan'])`,
		expected: { pandemic: 2, anachronistic: 2, hooligan: 4 }
	});

	test(argv, tests, options);
};
