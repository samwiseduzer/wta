const jsHint = require('jshint'),
	fs = require('fs-extra'),
	Util = require('./util'),
	acorn = require('acorn'),
	lo = require('lodash'),
	walk = require('acorn/dist/walk'),
	chalk = require('chalk');

module.exports = function(filepath, missingErr, options, cb) {
	addDefaultOptions(options);

	tryRead(filepath, missingErr).then(str => {
		const names = options.fnName ? (lo.isArray(options.fnName) ? options.fnName : [options.fnName]) : [];
		const nameObject = lo.zipObject(
			names,
			lo.map(names, function() {
				return true;
			})
		);
		let results = jsHint.JSHINT(
			['(function(){'].concat(str.split('\n').concat(['}());'])),
			{
				curly: true,
				eqeqeq: true,
				quotmark: 'single',
				browser: true,
				node: true,
				strict: 'implied',
				esversion: options.esVersion || 6,
				undef: true,
				unused: true,
				varstmt: options.esVersion !== 5,
				jasmine: !!options.isJasmine,
				globals: nameObject
			},
			nameObject
		);

		let errors = jsHint.JSHINT.errors;
		errors = removeUndefinedFnErrs(errors);
		errors = removeUndefinedUnusedClassErrs(errors);
		let data = jsHint.JSHINT.data();
		data.globals = data.globals || [];

		removeFnsFromGlobalsAndImplieds(options, data);
		removeClassesFromGlobalsAndImplieds(options, data);
		cleanJasmineData(options, data);
		handleFnReqs(options, data);

		let errCount = handleErrors(errors, options, data, str);
		let warnCount = getWarnings(options, data) - 1;

		if (errCount) {
			console.log('');
			cb('Errors must be fixed', null);
		} else if (warnCount) {
			console.log('');
			cb('Warnings must be fixed', null);
		} else {
			cb(null, results);
		}
	});
	function removeUndefinedFnErrs(errors) {
		return !options.fnName
			? errors
			: errors.filter(err => {
					if (lo.isArray(options.fnName)) {
						return (
							!(options.fnName.includes(err.a) && err.reason.slice(-15) === 'is not defined.') &&
							!(options.fnName.includes(err.a) && err.reason.slice(-26) === 'is defined but never used.')
						);
					} else {
						return (
							!(err.a === options.fnName && err.reason.slice(-15) === 'is not defined.') &&
							!(options.fnName === err.a && err.reason.slice(-26) === 'is defined but never used.')
						);
					}
				});
	}
	function removeUndefinedUnusedClassErrs(errors) {
		return !options.classes
			? errors
			: errors.filter(err => {
					return (
						!(options.classes.includes(err.a) && err.reason.slice(-15) === 'is not defined.') &&
						!(options.classes.includes(err.a) && err.reason.slice(-26) === 'is defined but never used.')
					);
				});
	}
};

function tryRead(filepath, missingErr) {
	return new Promise((resolve, reject) => {
		fs.exists(filepath, function(exists) {
			if (!exists) {
				Util.fatalError(missingErr);
			}
			fs.readFile(filepath, 'utf8', function(err, str) {
				if (err) Util.fatalError(err);
				resolve(str);
			});
		});
	});
}

function getWarnings(options, data) {
	let warnNum = 1;
	let warned = false;

	data.unused = data.unused
		? data.unused.filter(function(element) {
				return (
					element.name !== (options.isJasmine ? options.fnName[0] : options.fnName) &&
					(!options.classes || !options.classes.includes(element.name))
				);
			})
		: [];

	if (data.unused && data.unused.length) {
		warned = true;
		console.log(chalk.yellow('YOU HAVE WARNINGS:'));
		data.unused.forEach(warning => {
			console.log(
				chalk.yellow(
					`(${warnNum}) Unused variable on line ${String(warning.line).split(',')[0] - 1}: ${warning.name}`
				)
			);
			warnNum++;
		});
	}
	if (data.implieds && data.implieds.length) {
		if (!warned) {
			warned = true;
			console.log(chalk.yellow('YOU HAVE WARNINGS:'));
		}
		data.implieds.forEach(warning => {
			console.log(
				chalk.yellow(
					`(${warnNum}) Undeclared variable on line ${String(warning.line).split(',')[0] -
						1}: ${warning.name} must be declared with a keyword like var, let, or const`
				)
			);
			warnNum++;
		});
	}
	if (data.globals && data.globals.length) {
		if (!warned) {
			warned = true;
			console.log(chalk.yellow('YOU HAVE WARNINGS:'));
		}
		data.globals.forEach(warning => {
			console.log(
				chalk.yellow(
					`(${warnNum}) Global variable on line ${String(warning.line).split(',')[0] -
						1}: ${warning.name} is a global variable - try to solve this problem within just the scope of your function`
				)
			);
			warnNum++;
		});
	}
	return warnNum;
}

function handleErrors(errors, options, data, str) {
	errNum = 1;

	const syntaxReqErrors = getSyntaxReqsErrors(options, data, str);
	if (syntaxReqErrors.length) {
		console.log(chalk.red('YOU HAVE SYNTAX ERRORS:'));
		syntaxReqErrors.forEach(err => {
			const msg = `(${errNum}) Syntax Requirement: ${err}`;
			console.log(chalk.red(msg));
			errNum++;
		});
	}
	if (errors.length) {
		if (!syntaxReqErrors.length) console.log(chalk.red('YOU HAVE SYNTAX ERRORS:'));
		errors.forEach(function(error) {
			let rawMsg = error.raw;
			if (rawMsg.includes('{a}')) rawMsg = rawMsg.replace('{a}', error.a);
			if (rawMsg.includes('{b}')) rawMsg = rawMsg.replace('{b}', error.b);
			if (rawMsg.includes('{c}')) rawMsg = rawMsg.replace('{c}', error.c);
			if (rawMsg.includes('{d}')) rawMsg = rawMsg.replace('{d}', error.d);
			const msg = `(${errNum}) ${error.id}: ${rawMsg}
        Problem in "${error.hasOwnProperty('evidence')
			? error.evidence.trim()
			: '<NO EVIDENCE>'}" at line ${error.line - 1}, character ${error.character}`;
			console.log(chalk.red(msg));
			errNum++;
		});
	}
	if (errNum > 1) console.log('');
	return errNum - 1;
}

function cleanJasmineData(options, data) {
	const jasmineKeywords = ['describe', 'it', 'expect', 'beforeEach', 'afterEach', 'beforeAll', 'afterAll', 'spyOn'];
	if (options.isJasmine && data.globals) {
		jasmineKeywords.forEach(keyword => {
			if (data.globals.includes(keyword)) {
				data.globals.splice(data.globals.indexOf(keyword), 1);
			}
		});
	}
	if (options.isJasmine && data.implieds) {
		for (let i = data.implieds.length - 1; i >= 0; i--) {
			if (jasmineKeywords.concat(options.fnName).includes(data.implieds[i].name)) {
				data.implieds.splice(i, 1);
			}
		}
	}
}

function removeFnsFromGlobalsAndImplieds(options, data) {
	if (options.fnName) {
		if (!options.isJasmine) {
			data.globals.splice(data.globals.indexOf(options.fnName), 1);
		} else {
			if (!data.implieds) data.implieds = [];
			for (let i = 0; i < options.fnName.length; i++) {
				data.globals.splice(data.globals.indexOf(options.fnName[i]), 1);
				data.implieds.splice(data.globals.indexOf(options.fnName[i]), 1);
			}
		}
	}
}

function removeClassesFromGlobalsAndImplieds(options, data) {
	if (options.classes) {
		if (!data.implieds) data.implieds = [];
		for (let i = 0; i < options.classes.length; i++) {
			data.globals.splice(data.globals.indexOf(options.classes[i]), 1);
			data.implieds.splice(data.globals.indexOf(options.classes[i]), 1);
		}
	}
}

function handleFnReqs(options, data) {
	if (!options.isJasmine && !data.functions && options.fnName) {
		Util.fatalError(`Cannot find the required function "${options.fnName}"`);
	} else if (options.isJasmine && data.functions) {
		let found = false;
		data.functions.forEach(function(fn) {
			if (options.fnName.includes(fn.name)) {
				Util.fatalError(
					`The function "${fn.name}" should not be defined within your tests - this prevents us from testing our versions of the function "${fn.name}"`
				);
			}
		});
	} else {
		let found = false;
		data.functions.forEach(function(fn) {
			if (fn.name === options.fnName) found = true;
		});
		if (!options.isJasmine && !found && options.fnName)
			Util.fatalError(`Cannot find the required function "${options.fnName}"`);
	}
}

function getSyntaxReqsErrors(options, data, str) {
	let errors = [];
	if (options.syntaxReqs) {
		const tokens = [...acorn.tokenizer(str)].map(token => token.value).filter(name => name !== undefined);
		if (options.syntaxReqs.forbidden) {
			options.syntaxReqs.forbidden.forEach(req => {
				if (tokens.includes(req.name)) {
					errors.push(req.msg || `You are not allowed to use "${req.name}" in this exercise`);
				}
			});
		}
		if (options.syntaxReqs.limited) {
			options.syntaxReqs.limited.forEach(req => {
				if (tokens.reduce((prev, curr) => prev + (curr === req.name ? 1 : 0), 0) > req.max) {
					errors.push(
						req.msg ||
							`You may not use "${req.name}" more than ${req.max} time${req.max === 1
								? ''
								: 's'} in this exercise`
					);
				}
			});
		}
		if (options.syntaxReqs.required) {
			options.syntaxReqs.required.forEach(req => {
				if (tokens.reduce((prev, curr) => prev + (curr === req.name ? 1 : 0), 0) < req.min) {
					errors.push(req.msg || `You must use "${req.name}" at least once in this exercise`);
				}
			});
		}
	}
	if (!options.allowHigherOrderFns) {
		errors = [...errors, ...getHigherOrderFnErrors(options, data, str)];
	}
	return errors;
}

function addDefaultOptions(options) {
	options.syntaxReqs = options.syntaxReqs || {};
	options.syntaxReqs.forbidden = options.syntaxReqs.forbidden || [];
	options.syntaxReqs.forbidden.push({
		name: 'val',
		msg:
			'The provided variable "val" is meant to be a placeholder for a better-named variable YOU may or may not need to provide. In fact, it may not be necessary to create a variable at all in your solution.'
	});
	options.syntaxReqs.forbidden.push({
		name: 'console',
		msg: 'You cannot use "console.log" or any other console method in WTA exercises.'
	});
	options.esVersion = options.esVersion || 6;
	options.allowHigherOrderFns = options.allowHigherOrderFns || false;
}

function getHigherOrderFnErrors(options, data, str) {
	const typeMap = {};
	const errors = [];
	walk.full(acorn.parse(str), node => {
		if (
			node.type === 'MemberExpression' &&
			['forEach', 'map', 'reduce', 'filter', 'sort'].includes(node.property.name) &&
			!typeMap[node.property.name]
		) {
			typeMap[node.property.name] = true;
			errors.push(
				`This exercise prohibits the use of higher order array methods such as "${node.property.name}"`
			);
		}
	});
	return errors;
}
