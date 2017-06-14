const test = require('../../test')

module.exports = function(argv){
    let options = {
        fnName: 'getTwoBiggest'
    };
    let test1 = {
        input: 'getTwoBiggest([1,1])',
        expected: [1,1]
    };
    let test2 = {
        input: 'getTwoBiggest([4,7,9,2])',
        expected: [9,7]
    };
    let test3 = {
        input: 'getTwoBiggest([-5,-7,-9,-11])',
        expected: [-5,-7]
    };
    test(argv,[test1,test2,test3],options);
};