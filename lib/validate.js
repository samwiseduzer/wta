const jsHint = require('jshint'),
      fs = require('fs-extra'),
      Util = require('./util'),
      chalk = require('chalk');

module.exports = function(filepath,missingErr,options,cb){
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
                strict: true,
                esversion: 6
            });
            let errors = jsHint.JSHINT.errors;
            let data = jsHint.JSHINT.data();
            data.globals = data.globals || [];
            data.globals.splice(data.globals.indexOf(options.fnName),1);
            if(options.isJasmine && data.globals.includes('describe')){
                data.globals.splice(data.globals.indexOf('describe'),1);
            }
            if(options.isJasmine && data.globals.includes('it')){
                data.globals.splice(data.globals.indexOf('it'),1);
            }
            if(options.isJasmine && data.globals.includes('expect')){
                data.globals.splice(data.globals.indexOf('expect'),1);
            }
            if(options.isJasmine && data.implieds){
                for(let i = data.implieds.length - 1; i >= 0; i--){
                    if(['describe','it','expect',options.fnName].includes(data.implieds[i].name)) data.implieds.splice(i,1);
                }
            }
            data.unused = data.unused ? data.unused.filter(function(element){
                return element.name !== options.fnName;
            }) : [];
            // console.log('results:', JSON.stringify(results));
            // console.log('errors:', JSON.stringify(errors));
            // console.log('data:', JSON.stringify(data));
            let errCount = 1;
            let warnCount = 1;

            if(!options.isJasmine && !data.functions){
                Util.fatalError(`Cannot find the required function "${options.fnName}"`);
            }
            else{
                let found = false;
                data.functions.forEach(function(fn){
                    if(fn.name === options.fnName) found = true;
                });
                if(!options.isJasmine && !found) Util.fatalError(`Cannot find the required function "${options.fnName}"`);
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