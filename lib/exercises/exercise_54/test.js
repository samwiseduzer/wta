const test = require('../../test');

module.exports = function(argv) {
  let options = {
    fnName: 'sentence',
    esVersion: 6,
    allowHigherOrderFns: true,
    syntaxReqs: {
      forbidden: [{ name: 'arguments' }, { name: '+' }]
    }
  };

  const tests = [];
  tests.push({
    input: `sentence()`,
    expected: '.'
  });
  tests.push({
    input: `sentence('I','am','cool')`,
    expected: 'I am cool.'
  });
  tests.push({
    input: `sentence('I','have',6,'cats')`,
    expected: 'I have 6 cats.'
  });

  test(argv, tests, options);
};
