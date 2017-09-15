const test = require('../../test');

module.exports = function(argv) {
	let options = {
		fnName: 'lengthAnnouncer',
		esVersion: 5,
		allowHigherOrderFns: false
	};
	let test1 = {
		input: 'lengthAnnouncer("Science")',
		expected: 'Science has 7 characters!'
	};
	let test2 = {
		input: 'lengthAnnouncer("Arts")',
		expected: 'Arts has 4 characters!'
	};
	let test3 = {
		input: 'lengthAnnouncer("all your base is belong to us")',
		expected: 'all your base is belong to us has 29 characters!'
	};
	test(argv, [test1, test2, test3], options);
};
