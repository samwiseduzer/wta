const test = require('../../test')

module.exports = function(argv){
    let options = {
        fnName: 'fromOneToTen'
    };
    let test1 = {
        input: 'fromOneToTen()',
        expected: 'Only numbers from 1 to 10',
        type: {
            name: 'spread',
            targets: [1,2,3,4,5,6,7,8,9,10],
            tries: 1000
        }
    };
    let test2 = {
        input: 'fromOneToTen()',
        expected: 'Only numbers from 1 to 10',
        type: {
            name: 'spread',
            targets: [1,2,3,4,5,6,7,8,9,10],
            tries: 1000
        }
    };
    let test3 = {
        input: 'fromOneToTen()',
        expected: 'Only numbers from 1 to 10',
        type: {
            name: 'spread',
            targets: [1,2,3,4,5,6,7,8,9,10],
            tries: 1000
        }
    };
    test(argv,[test1,test2,test3],options);
};