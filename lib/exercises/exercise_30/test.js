const test = require('../../test')

module.exports = function(argv){
    let options = {
        fnName: 'isEuroFormat'
    };
    let test1 = {
        input: 'isEuroFormat("X04135981862")',
        expected: true
    };
    let test2 = {
        input: 'isEuroFormat("x04135981862")',
        expected: false
    };
    let test3 = {
        input: 'isEuroFormat("504135981862")',
        expected: false
    };
    let test4 = {
        input: 'isEuroFormat("X041359818626")',
        expected: false
    };
    let test5 = {
        input: 'isEuroFormat("X0413598186")',
        expected: false
    };
    let test6 = {
        input: 'isEuroFormat("XX4135981862")',
        expected: false
    };
    test(argv,[test1,test2,test3,test4,test5,test6],options);
};