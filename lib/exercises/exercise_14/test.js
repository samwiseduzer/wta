const test = require('../../test')

module.exports = function(argv){
    let test1 = {
        input: 'getAvg([3,4,5])',
        expected: 4
    };
    let test2 = {
        input: 'getAvg([1,3,3,3])',
        expected: 2.5
    };
    let test3 = {
        input: 'getAvg([-5,-7,-9])',
        expected: -7
    };
        
    test(argv,test1,test2,test3);
};