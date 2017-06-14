const test = require('../../test')

module.exports = function(argv){
    let options = {
        fnName: 'randFilteredElem'
    };
    let test1 = {
        input: 'randFilteredElem([1,10],10)',
        expected: 'Only the value 1<number>',
        type: {
            name: 'spread',
            targets: [1],
            tries: 50
        }
    };
    let test2 = {
        input: 'randFilteredElem([1,1,1,1,1,1,1,1,1,1,1,1,2],1)',
        expected: 'Only the value 2<number>',
        type: {
            name: 'spread',
            targets: [2],
            tries: 100
        }
    };
    let test3 = {
        input: 'randFilteredElem([null,undefined,10,""],1)',
        expected: 'Only the values null, undefined, 10<number>, and ""<string>',
        type: {
            name: 'spread',
            targets: [null,undefined,10,""],
            tries: 1000
        }
    };
    test(argv,[test1,test2,test3],options);
};