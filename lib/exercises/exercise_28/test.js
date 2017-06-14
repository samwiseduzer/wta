const test = require('../../test')

module.exports = function(argv){
    let options = {
        fnName: 'sameIngredients'
    };
    let test1 = {
        input: 'sameIngredients("bob","jane")',
        expected: false
    };
    let test2 = {
        input: 'sameIngredients("Bob","bobby")',
        expected: true
    };
    let test3 = {
        input: 'sameIngredients("indy books for sale.","KIND Boars left you alone.")',
        expected: true
    };
    test(argv,[test1,test2,test3],options);
};
