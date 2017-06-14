const test = require('../../test')

module.exports = function(argv){
    let options = {
        fnName: 'sumTo100'
    };
    let test1 = {
        input: 'sumTo100(100)',
        expected: 100
    };
    let test2 = {
        input: 'sumTo100(99)',
        expected: 199
    };
    let test3 = {
        input: 'sumTo100(-1)',
        expected: 5049
    };
    test(argv,[test1,test2,test3],options);
};