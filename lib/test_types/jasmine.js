const chalk = require('chalk'),
	Util = require('../util'),
	Path = require('path'),
	JasmineResults = require('./jasmine_support/jasmineTestResults.js'),
	getPort = require('get-port');

module.exports = {
	test: test,
	genResultStr: genResultStr
};

function test(vm, test, criteria, exercise, submission) {
	return new Promise((resolve, reject) => {
		Util.readExerciseCode(exercise, test.input, function(err, content) {
			if (err) return console.error(err);
			const testsWithCode = `${content}

${submission}
`;
			Util.createTempFile(testsWithCode, function(err, name) {
				if (err) return console.error(err);
				try {
					let finishedSuccessfully = false;
					const jasmineResults = new JasmineResults(test, criteria, exercise);

					getPort().then(port => {
						// const intercept = require("intercept-stdout");
						// let captured_text = "";

						// const unhook_intercept = intercept(function(text) {
						//     captured_text += text;
						// });
						const execArgv = process.execArgv.includes('--debug-brk') ? [`--debug=${port}`] : [];
						const childProcess = require('child_process').fork(
							Path.join(__dirname, './jasmine_support/jasmineTestFork.js'),
							{
								execArgv: execArgv,
								cwd: process.cwd()
							}
						);
						childProcess.on('message', function(msg) {
							switch (msg.type) {
								case 'jasmineStarted':
									// jasmineResults = new JasmineResults();
									break;
								case 'suiteStarted':
									jasmineResults.registerSuite(msg.data);
									break;
								case 'specStarted':
									jasmineResults.registerSpec(msg.data);
									break;
								case 'specDone':
									jasmineResults.resolveSpec(msg.data);
									break;
								case 'suiteDone':
									jasmineResults.resolveSpec(msg.data);
									break;
								case 'jasmineDone':
									finishedSuccessfully = true;
									const results = jasmineResults.getResults();
									resolve(results);
									break;
								case 'isComplete':
									console.log('huh?');
									break;
							}
						});
						childProcess.on('close', function(code) {
							// unhook_intercept();
							if (!finishedSuccessfully)
								throw new Error('jasmine child process failed to successfully complete');
						});
						const newPath = Path.join(__dirname, `../temp/test.js`);
						childProcess.send(newPath);
					});
				} catch (e) {
					reject(e);
				}
			});
		});
	});
}

function genResultStr(results, testIdx) {
	if (results.missing) {
		console.log(chalk.red(`TEST ${testIdx + 1}: FAILED! (${results.result})`));
	} else {
		console.log(
			chalk[results.pass ? 'green' : 'red'](
				`TEST ${testIdx + 1}: ${results.pass ? 'PASSED' : 'FAILED'}! (FLAW: ${results.test.type
					.description} - SHOULD ${results.expected ? 'PASS' : 'FAIL'}) ${results.failedSpec
					? `\n\t${results.failedSpec.fullName}: ${results.failedSpec.failedExpectations[0].message}`
					: ''}`
			)
		);
	}
}
