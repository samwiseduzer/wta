const test = require('../../test')

module.exports = function(argv){
    let options = {
        fnName: 'sumOfMultiples'
    };
    let test1 = {
        input: 'sumOfMultiples(1)',
        expected: 5050
    };
    let test2 = {
        input: 'sumOfMultiples(100)',
        expected: 100
    };
    let test3 = {
        input: 'sumOfMultiples(10)',
        expected: 550
    };
    test(argv,test1,test2,test3,options);
};