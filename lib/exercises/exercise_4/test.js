const test = require('../../test')

module.exports = function(argv){
    let test1 = {
        input: 'larger(-1,1)',
        expected: 1
    };
    let test2 = {
        input: 'larger(5,6)',
        expected: 6
    };
    let test3 = {
        input: 'larger(100,99)',
        expected: 100
    };
    test(argv,test1,test2,test3);
};