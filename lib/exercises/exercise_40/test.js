const test = require('../../test');

module.exports = function(argv) {
	let options = {
		fnName: 'getCharAppearances',
		esVersion: 5,
		allowHigherOrderFns: false
	};

	const tests = [];
	tests.push({
		input: `getCharAppearances('Grandma has chiggers!')`,
		expected: { g: 3, r: 2, a: 3, n: 1, d: 1, m: 1, ' ': 2, h: 2, s: 2, c: 1, i: 1, e: 1, '!': 1 }
	});
	tests.push({
		input: `getCharAppearances('bAnaNa')`,
		expected: { b: 1, a: 3, n: 2 }
	});
	tests.push({
		input: `getCharAppearances('')`,
		expected: {}
	});

	test(argv, tests, options);
};
