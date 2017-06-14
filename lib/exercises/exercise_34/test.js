const test = require('../../test')

module.exports = function(argv){
    let options = {
        fnName: 'test',
        isJasmine: true
    };

    const tests = [];
    tests.push({
        input: 'code1.js',
        expected: false,
        type: {
            name: 'jasmine',
            
        }
    });
    tests.push({
        input: 'code2.js',
        expected: false,
        type: {
            name: 'jasmine',
            
        }
    });
    test(argv,tests,options);
};