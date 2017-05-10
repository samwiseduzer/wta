const test = require('../../test')

module.exports = function(argv){
    let test1 = {
        input: 'avgUpTo100(0)',
        expected: 50
    };
    let test2 = {
        input: 'avgUpTo100(50)',
        expected: 75
    };
    let test3 = {
        input: 'avgUpTo100(99)',
        expected: 99.5
    };
    test(argv,test1,test2,test3);
};