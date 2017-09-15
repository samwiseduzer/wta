const test = require('../../test');

module.exports = function(argv) {
	let options = {
		fnName: ['isEuroFormat'],
		isJasmine: true,
		esVersion: 5,
		allowHigherOrderFns: false
	};

	const tests = [];
	tests.push({
		input: 'good.js',
		expected: true,
		type: {
			name: 'jasmine',
			overall: true,
			description: 'NONE'
		}
	});
	tests.push({
		input: 'lowerCaseLetter.js',
		expected: false,
		type: {
			name: 'jasmine',
			overall: true,
			description: 'Lowercase Letter'
		}
	});
	tests.push({
		input: 'noLetter.js',
		expected: false,
		type: {
			name: 'jasmine',
			overall: true,
			description: 'No Letter'
		}
	});
	tests.push({
		input: 'badLength.js',
		expected: false,
		type: {
			name: 'jasmine',
			overall: true,
			description: 'Bad length check'
		}
	});
	tests.push({
		input: 'not11Numbers.js',
		expected: false,
		type: {
			name: 'jasmine',
			overall: true,
			description: 'Wrong number of digits'
		}
	});
	test(argv, tests, options);
};
