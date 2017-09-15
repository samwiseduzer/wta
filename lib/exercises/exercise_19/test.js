const test = require('../../test');

module.exports = function(argv) {
	let options = {
		fnName: 'randElem',
		esVersion: 5,
		allowHigherOrderFns: false
	};
	let test1 = {
		input: 'randElem([1,10])',
		expected: 'All values in array',
		type: {
			name: 'spread',
			targets: [1, 10],
			tries: 1000
		}
	};
	let test2 = {
		input: 'randElem([1,2,3,4,5,6,7,8,9,10])',
		expected: 'All values in array',
		type: {
			name: 'spread',
			targets: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			tries: 1000
		}
	};
	let test3 = {
		input: 'randElem([10,"","Steve",null,undefined,NaN,false,true,0,5.5])',
		expected: 'All values in array',
		type: {
			name: 'spread',
			targets: [10, '', 'Steve', null, undefined, NaN, false, true, 0, 5.5],
			tries: 1000
		}
	};
	test(argv, [test1, test2, test3], options);
};
