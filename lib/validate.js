const jsHint = require('jshint'),
      fs = require('fs-extra'),
      Util = require('./util'),
      chalk = require('chalk');

module.exports = function(filepath,missingErr,fnName,cb){
    fs.exists(filepath, function(exists){
        if(!exists){
            Util.fatalError(missingErr);
        }
        fs.readFile(filepath, 'utf8', function(err,str){
            if(err) Util.fatalError(err);
            // console.log('str:',str)
            let results = jsHint.JSHINT(["(function(){'use strict';"].concat(str.split('\n').concat(['}());'])),
            {
                curly: true,
                eqeqeq: true,
                quotmark: 'single',
                browser: true,
                node: true,
                strict: true
            });
            let errors = jsHint.JSHINT.errors;
            let data = jsHint.JSHINT.data();
            data.globals = data.globals || [];
            data.globals.splice(data.globals.indexOf(fnName),1);
            data.unused = data.unused ? data.unused.filter(function(element){
                return element.name !== fnName;
            }) : [];
            // console.log('results:', JSON.stringify(results));
            // console.log('errors:', JSON.stringify(errors));
            // console.log('data:', JSON.stringify(data));
            let errCount = 1;
            let warnCount = 1;

            if(!data.functions){
                Util.fatalError(`Cannot find the required function "${fnName}"`);
            }
            else{
                let found = false;
                data.functions.forEach(function(fn){
                    if(fn.name === fnName) found = true;
                });
                if(!found) Util.fatalError(`Cannot find the required function "${fnName}"`);
            }
            if(errors.length){
                console.log(chalk.red('YOU HAVE SYNTAX ERRORS:'));
                
                errors.forEach(function(error){
                    let rawMsg = error.raw;
                    if(rawMsg.includes('{a}')) rawMsg = rawMsg.replace('{a}',error.a);
                    if(rawMsg.includes('{b}')) rawMsg = rawMsg.replace('{b}',error.b);
                    if(rawMsg.includes('{c}')) rawMsg = rawMsg.replace('{c}',error.c);
                    if(rawMsg.includes('{d}')) rawMsg = rawMsg.replace('{d}',error.d);
                    let msg = `(${errCount}) ${error.id}: ${rawMsg}
Problem in "${error.hasOwnProperty('evidence') ? error.evidence.trim() : '<NO EVIDENCE>'}" at line ${error.line-1}, character ${error.character}`
                    console.log(chalk.red(msg));
                    errCount++;
                });
                console.log('');
                cb(errors,null);
            }
            if(data.unused && data.unused.length){
                data.unused.forEach((warning) => {console.log(chalk.yellow(`(${warnCount}) Unused variable on line ${String(warning.line).split(',')[0] - 1}: ${warning.name}`));warnCount++;});
            }
            if(data.implieds && data.implieds.length){
                data.implieds.forEach((warning) => {console.log(chalk.yellow(`(${warnCount}) Undeclared variable on line ${String(warning.line).split(',')[0] - 1}: ${warning.name} must be declared with a keyword like var, let, or const`));warnCount++;});
            }
            if(data.globals && data.globals.length){
                data.globals.forEach((warning) => {console.log(chalk.yellow(`(${warnCount}) Global variable on line ${String(warning.line).split(',')[0] - 1}: ${warning.name} is a global variable - try to solve this problem within just the scope of your function`));warnCount++;});
            }
            if(errCount === 1 && warnCount === 1){
                cb(null,results);
            }
            else{
                console.log('');
                cb('Warnings must be fixed',null);
            }
        });
    });
};