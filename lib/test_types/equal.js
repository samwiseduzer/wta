const chalk = require('chalk'),
	lo = require('lodash');

module.exports = {
	test: test,
	genResultStr: genResultStr
};

function test(vm, test, criteria, exercise, submission) {
	return new Promise((resolve, reject) => {
		let result = vm.run(test.input);
		const passed = lo.isEqual(test.expected, result);
		resolve({
			input: test.input,
			result: result,
			pass: passed,
			expected: test.expected,
			type: 'equals'
		});
	});
}

function genResultStr(results, testIdx) {
	if (results.pass) {
		console.log(
			chalk.green(`TEST ${testIdx + 1}: PASSED! (${results.input} === ${JSON.stringify(results.expected)})`)
		);
	} else {
		console.log(
			chalk.red(
				`TEST ${testIdx + 1}: FAILED! ${results.input} 
                Expected (${JSON.stringify(results.expected)})<${typeof results.expected}>, but got (${JSON.stringify(
					results.result
				)})<${typeof results.result}> instead`
			)
		);
	}
}
