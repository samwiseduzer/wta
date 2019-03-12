const chalk = require('chalk');

module.exports = function() {
  console.log(
    chalk.yellow(
      `EXERCISE 54:

		Create a function called "sentence" that takes any number of parameters and returns a sentence
			with these parameters as words without using concatenation.

        For example:

		sentence() should return '.'

		sentence('I','am','cool') should return 'I am cool.'

		sentence('I','have',6,'cats') should return 'I have 6 cats.'
        `
    )
  );
  process.exit();
};
