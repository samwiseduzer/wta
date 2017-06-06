const test = require('../../test')

module.exports = function(argv){
    let options = {
        fnName: 'hello'
    };
    let test1 = {
        input: 'hello("Steve")',
        expected: "Hello, Steve!"
    };
    let test2 = {
        input: 'hello("Martha")',
        expected: "Hello, Martha!"
    };
    let test3 = {
        input: 'hello("Jacob")',
        expected: "Hello, Jacob!"
    };
    test(argv,test1,test2,test3,options);
};