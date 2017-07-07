const test = require('../../test')

module.exports = function(argv){
    let options = {
        fnName: ['isValidPhone'],
        isJasmine: true
    };

    const tests = [];
    tests.push({
        input: 'good.js',
        expected: true,
        type: {
            name: 'jasmine',
            overall: true,
            description: 'NONE'
        }
    });
    tests.push({
        input: 'badNetworkDigit.js',
        expected: false,
        type: {
            name: 'jasmine',
            overall: true,
            description: 'Invalid third digits'
        }
    });
    tests.push({
        input: 'badPrefixCheck.js',
        expected: false,
        type: {
            name: 'jasmine',
            overall: true,
            description: 'Invalid prefix'
        }
    });
    tests.push({
        input: 'tooFewDigits.js',
        expected: false,
        type: {
            name: 'jasmine',
            overall: true,
            description: 'Too few digits'
        }
    });
    tests.push({
        input: 'tooManyDigits.js',
        expected: false,
        type: {
            name: 'jasmine',
            overall: true,
            description: 'Too many digits'
        }
    });
    test(argv,tests,options);
};