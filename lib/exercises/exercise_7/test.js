const test = require('../../test');

module.exports = function(argv) {
	let options = {
		fnName: 'getDanceStyle',
		esVersion: 5,
		allowHigherOrderFns: false
	};

	test(
		argv,
		[
			{
				input: 'getDanceStyle("4/4",85)',
				expected: 'no match found'
			},
			{
				input: 'getDanceStyle("2/4",86)',
				expected: 'no match found'
			},
			{
				input: 'getDanceStyle("3/4",93)',
				expected: 'Waltz'
			},
			{
				input: 'getDanceStyle("3/4",94)',
				expected: 'no match found'
			},
			{
				input: 'getDanceStyle("3/4",83)',
				expected: 'no match found'
			},
			{
				input: 'getDanceStyle("4/4",129)',
				expected: 'no match found'
			},
			{
				input: 'getDanceStyle("2/4",179)',
				expected: 'no match found'
			},
			{
				input: 'getDanceStyle("3/4",180)',
				expected: 'Viennese Waltz'
			},
			{
				input: 'getDanceStyle("3/4",181)',
				expected: 'no match found'
			},
			{
				input: 'getDanceStyle("3/4",149)',
				expected: 'no match found'
			},
			{
				input: 'getDanceStyle("4/4",112)',
				expected: 'Cha-Cha'
			},
			{
				input: 'getDanceStyle("4/4",111)',
				expected: 'no match found'
			},
			{
				input: 'getDanceStyle("4/4",129)',
				expected: 'no match found'
			},
			{
				input: 'getDanceStyle("2/4",116)',
				expected: 'no match found'
			},
			{
				input: 'getDanceStyle("3/4",118)',
				expected: 'no match found'
			},
			{
				input: 'getDanceStyle("4/4",176)',
				expected: 'Jive'
			},
			{
				input: 'getDanceStyle("4/4",151)',
				expected: 'no match found'
			},
			{
				input: 'getDanceStyle("4/4",177)',
				expected: 'no match found'
			},
			{
				input: 'getDanceStyle("2/4",170)',
				expected: 'no match found'
			},
			{
				input: 'getDanceStyle("2/4",125)',
				expected: 'Tango'
			},
			{
				input: 'getDanceStyle("2/4",119)',
				expected: 'no match found'
			},
			{
				input: 'getDanceStyle("2/4",133)',
				expected: 'no match found'
			},
			{
				input: 'getDanceStyle("3/4",125)',
				expected: 'no match found'
			}
		],
		options
	);
};
