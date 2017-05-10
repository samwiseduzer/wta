const test = require('../../test')

module.exports = function(argv){
    let test1 = {
        input: 'getDanceStyle("4/4",120)',
        expected: "Cha-Cha"
    };
    let test2 = {
        input: 'getDanceStyle("2/4",120)',
        expected: "Tango"
    };
    let test3 = {
        input: 'getDanceStyle("4/4",5)',
        expected: "no match found"
    };
    test(argv,test1,test2,test3);
};
        