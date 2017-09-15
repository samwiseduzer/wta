const chalk = require('chalk');

module.exports = {
	test: test,
	genResultStr: genResultStr
};

function test(vm, test, criteria, exercise, submission) {
	return new Promise((resolve, reject) => {
		let targets = test.type.targets;
		let missing = targets.slice(0);
		let tries = test.tries || 100;
		let results = {
			input: test.input,
			result: null,
			pass: false,
			expected: test.expected,
			type: 'spread'
		};
		for (let i = 0, result; i < tries; i++) {
			result = vm.run(test.input);
			if (!targets.includes(result)) {
				results.result = `Output (${result})<${typeof result}> was outside acceptable values`;
				break;
			} else if (missing.includes(result)) {
				missing.splice(missing.indexOf(result), 1);
			}
		}

		if (!results.result && missing.length) {
			results.result = `Required value${missing.length > 1 ? 's' : ''} missing: ${missing.length > 1
				? missing.join(',')
				: missing[0]}`;
		} else if (!results.result) {
			results.pass = true;
		}

		resolve(results);
	});
}

function genResultStr(results, testIdx) {
	if (results.pass) {
		console.log(chalk.green(`TEST ${testIdx + 1}: PASSED!`));
	} else {
		console.log(
			chalk.red(
				`TEST ${testIdx + 1}: FAILED! ${results.input} 
                Expected (${results.expected}), but (${results.result})`
			)
		);
	}
}
