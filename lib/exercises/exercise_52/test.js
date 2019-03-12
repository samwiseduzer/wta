const test = require('../../test');

module.exports = function(argv) {
  let options = {
    fnName: 'sum',
    esVersion: 6,
    allowHigherOrderFns: true,
    syntaxReqs: {
      forbidden: [{ name: 'arguments' }]
    }
  };

  const tests = [];
  tests.push({
    input: `sum()`,
    expected: 0
  });
  tests.push({
    input: `sum(5)`,
    expected: 5
  });
  tests.push({
    input: `sum(1,6,-7,18)`,
    expected: 18
  });
  tests.push({
    input: `sum(-5,17,1,1,1,1,1)`,
    expected: 17
  });

  test(argv, tests, options);
};
