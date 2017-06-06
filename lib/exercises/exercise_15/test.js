const test = require('../../test')

module.exports = function(argv){
    let options = {
        fnName: 'getSmallest'
    };
    let test1 = {
        input: 'getSmallest([3,4,5])',
        expected: 3
    };
    let test2 = {
        input: 'getSmallest([9,29,0])',
        expected: 0
    };
    let test3 = {
        input: 'getSmallest([0,7,-9])',
        expected: -9
    };
    test(argv,test1,test2,test3,options);
};