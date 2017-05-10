const test = require('../../test')

module.exports = function(argv){
    let test1 = {
        input: 'mimic("blah")',
        expected: 'blahblah'
    };
    let test2 = {
        input: 'mimic("steve")',
        expected: "stevesteve"
    };
    let test3 = {
        input: 'mimic("eat cake")',
        expected: "eat cakeeat cake"
    };
    test(argv,test1,test2,test3);
};