#!/usr/bin/env node

const figlet = require('figlet'),
    clear = require('clear'),
    inquirer = require('inquirer'),
    chalk = require('chalk'),
    Util = require('./lib/util'),
    fs = require('fs-extra'),
    gen = require('./lib/gen');

let commands = ['exercise','hint','test','gen'];

clear();

console.log(
    chalk.yellow(
        figlet.textSync('WTA', { horizontalLayout: 'full' })
    )
);

// if no command
let argv = require('minimist')(process.argv.slice(2));
if (!argv._.length) {
    clear();
    displayCmds();
    process.exit();
}

//make cmd easy to access
let cmd = argv._[0].toLowerCase();

// if invalid command
if (!commands.includes(cmd)) {
    clear();
    displayCmds();
    Util.fatalError('Invalid Generator!');
}

// if valid command, but no exercise argument specified
if(argv._.length === 1){
    Util.fatalError('Must specify exercise number!');
}

let exercise = +argv._[1];

const NUM_EXERCISES = fs.readdirSync(`${__dirname}/lib/exercises`).filter(function(directory) {
    return directory !== '.DS_Store';
}).length - 1;

// if valid command, but invalid exercise argument
if(exercise > NUM_EXERCISES || exercise < 0){
    Util.fatalError(`The highest current exercise is ${NUM_EXERCISES}!`);
}

// if valid command and exercise number
// if gen command
if(cmd === 'gen'){
    gen(exercise);
}
else{
    require('./lib/exercises/exercise_' + exercise + '/' + cmd + '.js')(argv._);
}

function displayCmds(){
    console.log(chalk.yellow('AVAILABLE COMMANDS:'));
    console.log(chalk.white('exercise <exercise #>: ' + chalk.white('Prints description of the given exercise')));
    console.log(chalk.white('hint <exercise #>: ' + chalk.white('Prints hints for the given exercise')));
    console.log(chalk.white('gen <exercise #>: ' + chalk.white('Generates starter file for the given exercise if it doesn\'t already exist')));
    console.log(chalk.white('test <exercise #> <optional filepath>: ' + chalk.white('Tests the given exercise at the optionally given filepath or, if filepath is omitted, the default exercise path')));

    console.log(chalk.blue(`
    Example workflow: 
        1) Generate the second exercise:
            $ wta gen 2 
        2) Read the exercise description inside exercise2.js and try to write a solution
        3) Test your solution for exercise 2:
            $ wta test 2
        4) If your solution doesn't work, and you don't know what to do next, look at the exercise hints
            $ wta hint 2
        5) Try again:
            $ wta test 2
        `
    ));
}