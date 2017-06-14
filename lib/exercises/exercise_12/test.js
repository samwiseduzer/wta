const test = require('../../test')

module.exports = function(argv){
    let options = {
        fnName: 'getAppearances'
    };
    let test1 = {
        input: 'getAppearances([],1)',
        expected: 0
    };
    let test2 = {
        input: 'getAppearances([5,5,5,5,5,6,7,8],5)',
        expected: 5
    };
    let test3 = {
        input: 'getAppearances(["sam","is","cool"],"sam")',
        expected: 1
    };
    test(argv,[test1,test2,test3],options);
};