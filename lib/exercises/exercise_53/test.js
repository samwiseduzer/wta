const test = require('../../test');

module.exports = function(argv) {
  let options = {
    fnName: 'mean',
    esVersion: 6,
    allowHigherOrderFns: true,
    syntaxReqs: {
      forbidden: [{ name: 'arguments' }]
    }
  };

  const tests = [];
  tests.push({
    input: `mean()`,
    expected: 0
  });
  tests.push({
    input: `mean(3)`,
    expected: 3
  });
  tests.push({
    input: `mean(1,6,-7,24)`,
    expected: 6
  });
  tests.push({
    input: `mean(-5,17.5)`,
    expected: 6.25
  });

  test(argv, tests, options);
};
