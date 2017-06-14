const test = require('../../test')

module.exports = function(argv){
    let options = {
        fnName: 'isValidEuro'
    };
    let test1 = {
        input: 'isValidEuro("X04135981862")',
        expected: true
    };
    let test2 = {
        input: 'isValidEuro("Z95784996599")',
        expected: false
    };
    let test3 = {
        input: 'isValidEuro("Y84673885488")',
        expected: false
    };
    let test4 = {
        input: 'isValidEuro("W94684895598")',
        expected: true
    };
    let test5 = {
        input: 'isValidEuro("1584673885488")',
        expected: false
    };
    let test6 = {
        input: 'isValidEuro("X041C5981862")',
        expected: false
    };
    test(argv,[test1,test2,test3,test4,test5,test6],options);
};
