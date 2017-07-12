const test = require('../../test')

module.exports = function(argv){
    let options = {
        fnName: ['isValidCardFormat'],
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
        input: 'badPrefix.js',
        expected: false,
        type: {
            name: 'jasmine',
            overall: true,
            description: 'Bad prefix'
        }
    });
    tests.push({
        input: 'wrongVisaLengthAllowed.js',
        expected: false,
        type: {
            name: 'jasmine',
            overall: true,
            description: 'Bad VISA card length'
        }
    });
    tests.push({
        input: 'wrongVisaLengthDisallowed.js',
        expected: false,
        type: {
            name: 'jasmine',
            overall: true,
            description: 'Correct VISA card length wrongly disallowed'
        }
    });
    tests.push({
        input: 'wrongAmericanExpressLengthAllowed.js',
        expected: false,
        type: {
            name: 'jasmine',
            overall: true,
            description: 'Bad American Express card length'
        }
    });
    tests.push({
        input: 'wrongAmericanExpressLengthDisallowed.js',
        expected: false,
        type: {
            name: 'jasmine',
            overall: true,
            description: 'Correct American Express card length wrongly disallowed'
        }
    });
    tests.push({
        input: 'wrongMasterCardLengthAllowed.js',
        expected: false,
        type: {
            name: 'jasmine',
            overall: true,
            description: 'Bad MasterCard card length'
        }
    });
    tests.push({
        input: 'wrongMasterCardLengthDisallowed.js',
        expected: false,
        type: {
            name: 'jasmine',
            overall: true,
            description: 'Correct MasterCard card length wrongly disallowed'
        }
    });
    tests.push({
        input: 'wrongDiscoverLengthAllowed.js',
        expected: false,
        type: {
            name: 'jasmine',
            overall: true,
            description: 'Bad Discover card length'
        }
    });
    tests.push({
        input: 'wrongDiscoverLengthDisallowed.js',
        expected: false,
        type: {
            name: 'jasmine',
            overall: true,
            description: 'Correct Discover card length wrongly disallowed'
        }
    });
    tests.push({
        input: 'wrongDinersClubLengthAllowed.js',
        expected: false,
        type: {
            name: 'jasmine',
            overall: true,
            description: 'Bad DinersClub card length'
        }
    });
    tests.push({
        input: 'wrongDinersClubLengthDisallowed.js',
        expected: false,
        type: {
            name: 'jasmine',
            overall: true,
            description: 'Correct DinersClub card length wrongly disallowed'
        }
    });
    test(argv,tests,options);
};