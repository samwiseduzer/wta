const test = require('../../test')

module.exports = function(argv){
    let options = {
        fnName: 'getLongest'
    };
    let test1 = {
        input: 'getLongest(["",""])',
        expected: ''
    };
    let test2 = {
        input: 'getLongest(["sam","jake","jill"])',
        expected: 'jake'
    };
    let test3 = {
        input: 'getLongest(["-5","-7","-94"])',
        expected: '-94'
    };
    test(argv,test1,test2,test3,options);
};