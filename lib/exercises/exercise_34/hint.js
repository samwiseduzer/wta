const chalk = require('chalk');

module.exports = function(){
    console.log(chalk.yellow(
        `
        1) In Jasmine, test suites are declared by using the "describe" function
        2) In Jasmine, test specs are declared using the "it" function inside test suites
        3) When in doubt, look at the documentation at jasmine.github.io - it's pretty good
        4) You generally can (and should) have multiple specs within a suite
        5) You generally can (and should) have multiple expects within a spec
        6) You should generally start a spec with an expect that expects a correct behavior from correct input before writing expects with incorrect input
        7) Specs (it) should describe a specific rule
        8) When writing a test to fail, make sure it fails in only one specific way - that way you're testing the code for that specific behavior
        `
    ));
    process.exit();
};