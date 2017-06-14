const test = require('../../test')

module.exports = function(argv){
    let options = {
        fnName: 'isValidPhone'
    };

    const tests = [];
    tests.push({
        input: 'isValidPhone("0877654233")',
        expected: true
    });
    tests.push({
        input: 'isValidPhone("0737654233")',
        expected: false
    });
    tests.push({
        input: 'isValidPhone("08576542336")',
        expected: false
    });
    tests.push({
        input: 'isValidPhone("0827654233")',
        expected: false
    });
    tests.push({
        input: 'isValidPhone("0867654233")',
        expected: true
    });
    tests.push({
        input: 'isValidPhone("0857654233")',
        expected: true
    });
    tests.push({
        input: 'isValidPhone("0837654233")',
        expected: true
    });
    tests.push({
        input: 'isValidPhone("083k654233")',
        expected: false
    });
    
    test(argv,tests,options);
};