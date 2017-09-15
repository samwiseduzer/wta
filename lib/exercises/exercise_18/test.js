const test = require('../../test');

module.exports = function(argv) {
	let options = {
		fnName: 'randNum',
		esVersion: 5,
		allowHigherOrderFns: false
	};
	let test1 = {
		input: 'randNum(1,10)',
		expected: 'Only numbers from 1 to 10',
		type: {
			name: 'spread',
			targets: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			tries: 1000
		}
	};
	let test2 = {
		input: 'randNum(5,10)',
		expected: 'Only numbers from 5 to 10',
		type: {
			name: 'spread',
			targets: [5, 6, 7, 8, 9, 10],
			tries: 1000
		}
	};
	let test3 = {
		input: 'randNum(10,10)',
		expected: 'Only numbers from 10 to 10',
		type: {
			name: 'spread',
			targets: [10],
			tries: 1000
		}
	};
	test(argv, [test1, test2, test3], options);
};
