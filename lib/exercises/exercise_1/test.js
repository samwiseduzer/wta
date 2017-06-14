const test = require('../../test')

module.exports = function(argv){
    let options = {
        fnName: 'square'
    };
    let test1 = {
        input: 'square(-1)',
        expected: 1
    };
    let test2 = {
        input: 'square(5)',
        expected: 25
    };
    let test3 = {
        input: 'square(10)',
        expected: 100
    };
    test(argv,[test1,test2,test3],options);
};