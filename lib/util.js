const chalk = require('chalk'),
         fs = require('fs-extra'),
       path = require('path');

module.exports = {
    fatalError: fatalError,
    createTempFile: createTempFile,
    removeTempFile: removeTempFile,
    readExerciseCode: readExerciseCode
};

function fatalError(msg) {
    console.log(chalk.red(msg));
    process.exit();
}

function readExerciseCode(exerciseNum,testFile,cb){
    fs.readFile(path.join(__dirname,`./exercises/exercise_${exerciseNum}/code/${testFile}`), function(err,content){
        cb(err,content);
    });
}

function createTempFile(content,cb){
    const name = `${guid()}.js`;
    fs.writeFile(path.join(__dirname,`./temp/test.js`), content, function(err) {
        cb(err,name);
    });
}

function removeTempFile(name, cb){
    // const removePath = path.join(__dirname,`./temp/${name}`);
    const removePath = path.join(__dirname, './temp/test.js');
    try{
        return fs.remove(removePath)
        .then(function(){
            console.log(`REMOVED: ${tempPath}`);
        })
        .catch((err) => {
            if(err) console.error(err);
        });
    }
    catch(e){
        console.error(e);
    } 
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}
