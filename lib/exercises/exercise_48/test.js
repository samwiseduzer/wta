const test = require('../../test');

module.exports = function(argv) {
	let options = {
		classes: ['Stack', 'List'],
		esVersion: 6,
		syntaxReqs: {
			required: [{ name: 'class' }, { name: 'super' }],
			forbidden: [{ name: 'prototype' }]
		}
	};

	const tests = [];
	tests.push({
		input: `new Stack()`,
		expected: { content: [], size: 0 }
	});
	tests.push({
		input: `let myStack = new Stack(); myStack.push(5); myStack.push(4); myStack`,
		expected: { content: [5, 4], size: 2 }
	});
	tests.push({
		input: `myStack = new Stack(); myStack.push(5); myStack.push(4); myStack.pop(); myStack`,
		expected: { content: [5], size: 1 }
	});
	tests.push({
		input: `myStack = new Stack(); myStack.push(5); myStack.push(4); myStack.pop()`,
		expected: 4
	});
	tests.push({
		input: `myStack = new Stack(); myStack.pop()`,
		expected: null
	});
	tests.push({
		input: `myStack = new Stack(); myStack.push(5); myStack.push(4); myStack.pop(); myStack.pop(); myStack.pop()`,
		expected: null
	});
	tests.push({
		input: `let myList = new List(); myList`,
		expected: { size: 0 }
	});
	tests.push({
		input: `myList = new List(); myList.add(5); myList`,
		expected: { 0: 5, size: 1 }
	});
	tests.push({
		input: `myList = new List(); myList.add(5); myList.add('Steve'); myList.add(5); myList`,
		expected: { 0: 5, 1: 'Steve', 2: 5, size: 3 }
	});
	tests.push({
		input: `myList = new List(); myList.add(5); myList.add('Steve'); myList.add(5); myList.remove(3); myList`,
		expected: { 0: 5, 1: 'Steve', 2: 5, size: 3 }
	});
	tests.push({
		input: `myList = new List(); myList.add(5); myList.add('Steve'); myList.add(5); myList.remove(-1); myList`,
		expected: { 0: 5, 1: 'Steve', 2: 5, size: 3 }
	});
	tests.push({
		input: `myList = new List(); myList.add(5); myList.add('Steve'); myList.add(5); myList.remove(2); myList`,
		expected: { 0: 5, 1: 'Steve', size: 2 }
	});
	tests.push({
		input: `myList = new List(); myList.add(5); myList.add('Steve'); myList.add(5); myList.remove(1); myList`,
		expected: { 0: 5, 1: 5, size: 2 }
	});
	tests.push({
		input: `myList = new List(); myList.add(5); myList.add('Steve'); myList.add(5); myList.remove(0); myList`,
		expected: { 0: 'Steve', 1: 5, size: 2 }
	});
	tests.push({
		input: `myList = new List(); myList.add(5); myList.add('Steve'); myList.add(7); myList.reverse(); myList`,
		expected: { 0: 7, 1: 'Steve', 2: 5, size: 3 }
	});

	test(argv, tests, options);
};
