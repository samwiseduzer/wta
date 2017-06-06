const test = require('../../test')

module.exports = function(argv){
    let options = {
        fnName: 'grade'
    };
    let test1 = {
        input: 'grade(0)',
        expected: "F"
    };
    let test2 = {
        input: 'grade(69)',
        expected: "D"
    };
    let test3 = {
        input: 'grade(100)',
        expected: "A"
    };
    test(argv,test1,test2,test3,options);
};