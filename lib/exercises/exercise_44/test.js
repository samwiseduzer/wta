const test = require('../../test');

module.exports = function(argv) {
	let options = {
		fnName: 'List',
		esVersion: 5,
		allowHigherOrderFns: false
	};

	const tests = [];
	tests.push({
		input: `var myList = new List(); myList;`,
		expected: { size: 0 }
	});
	tests.push({
		input: `var myList = new List(); myList.add(5); myList;`,
		expected: { 0: 5, size: 1 }
	});
	tests.push({
		input: `var myList = new List(); myList.add(5); myList.add('Steve'); myList.add(5); myList;`,
		expected: { 0: 5, 1: 'Steve', 2: 5, size: 3 }
	});
	tests.push({
		input: `var myList = new List(); myList.add(5); myList.add('Steve'); myList.add(5); myList.remove(3); myList;`,
		expected: { 0: 5, 1: 'Steve', 2: 5, size: 3 }
	});
	tests.push({
		input: `var myList = new List(); myList.add(5); myList.add('Steve'); myList.add(5); myList.remove(-1); myList;`,
		expected: { 0: 5, 1: 'Steve', 2: 5, size: 3 }
	});
	tests.push({
		input: `var myList = new List(); myList.add(5); myList.add('Steve'); myList.add(5); myList.remove(2); myList;`,
		expected: { 0: 5, 1: 'Steve', size: 2 }
	});
	tests.push({
		input: `var myList = new List(); myList.add(5); myList.add('Steve'); myList.add(5); myList.remove(1); myList;`,
		expected: { 0: 5, 1: 5, size: 2 }
	});
	tests.push({
		input: `var myList = new List(); myList.add(5); myList.add('Steve'); myList.add(5); myList.remove(0); myList;`,
		expected: { 0: 'Steve', 1: 5, size: 2 }
	});

	test(argv, tests, options);
};
