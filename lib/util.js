var chalk = require('chalk');

module.exports = {
    fatalError: fatalError
};

function fatalError(msg) {
    console.log(chalk.red(msg));
    process.exit();
}