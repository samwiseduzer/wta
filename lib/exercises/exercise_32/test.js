const test = require('../../test')

module.exports = function(argv){
    let options = {
        fnName: 'isValidCardFormat'
    };
    const tests = [];
    tests.push({
        input: 'isValidCardFormat("4175937769982")',
        expected: true
    });
    tests.push({
        input: 'isValidCardFormat("4175937769982456")',
        expected: true
    });
    tests.push({
        input: 'isValidCardFormat("4r75937769982456")',
        expected: false
    });
    tests.push({
        input: 'isValidCardFormat("5675937769982456")',
        expected: false
    });
    tests.push({
        input: 'isValidCardFormat("417593776998245")',
        expected: false
    });
    tests.push({
        input: 'isValidCardFormat("347593776998245")',
        expected: true
    });
    tests.push({
        input: 'isValidCardFormat("377593776998245")',
        expected: true
    });
    tests.push({
        input: 'isValidCardFormat("3775937769982456")',
        expected: false
    });
    tests.push({
        input: 'isValidCardFormat("5275937769982456")',
        expected: true
    });
    tests.push({
        input: 'isValidCardFormat("52759377699824567")',
        expected: false
    });
    tests.push({
        input: 'isValidCardFormat("537593776998245")',
        expected: false
    });
    tests.push({
        input: 'isValidCardFormat("6011937769982456")',
        expected: true
    });
    tests.push({
        input: 'isValidCardFormat("601193776998245")',
        expected: false
    });
    tests.push({
        input: 'isValidCardFormat("30419377699824")',
        expected: true
    });
    tests.push({
        input: 'isValidCardFormat("36419377699824")',
        expected: true
    });
    tests.push({
        input: 'isValidCardFormat("38419377699824")',
        expected: true
    });
    tests.push({
        input: 'isValidCardFormat("3841937769982478")',
        expected: false
    });
    test(argv,tests,options);
};
