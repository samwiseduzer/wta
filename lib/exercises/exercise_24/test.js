const test = require('../../test')

module.exports = function(argv){
    let options = {
        fnName: 'longestWord'
    };
    let test1 = {
        input: 'longestWord("A really long sentence.")',
        expected: 'sentence'
    };
    let test2 = {
        input: 'longestWord("Two equally long words are in this account.")',
        expected: 'equally'
    };
    let test3 = {
        input: 'longestWord("Hey")',
        expected: 'Hey'
    };
    test(argv,[test1,test2,test3],options);
};