var fs    = require('fs-extra'),
    path  = require('path'),
    chalk = require('chalk'),
    Util  = require('./util');

module.exports = function(exercise){
    let exercisePath = `${process.cwd()}/exercise${exercise}.js`;
    fs.readFile(exercisePath, 'utf8', function(err,data){
        // the err variable substitutes for the fs.exists callback function variable
        if (!err){
            Util.fatalError('File already exists!');
        }else{
            // handle the non-existence of the file
            fs.copy(path.join(__dirname, `./exercises/exercise_${exercise}/starter.js`), exercisePath, function(err){
                if(err) console.log('err: ', err);
                console.log(chalk.yellow(`File created. Use your text editor to open the file at ${exercisePath}`));
                process.exit();
            });
        }
    });
};
