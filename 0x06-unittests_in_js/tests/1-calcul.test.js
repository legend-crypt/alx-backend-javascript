const assert = require('assert');
const calculateNumber = require('../1-calcul.js');

describe('SUM', function () {
  it('should check equal', function () {
    assert.equal(calculateNumber('SUM', 3.4, 4.5), 8);
  });
  it('should check false', function () {
    assert.notEqual(calculateNumber('SUM', 3.5, 5.5), 9);
  });
});

describe('SUBTRACT', function () {
  it('should check equal', function () {
    assert.equal(calculateNumber('SUBTRACT', 3.4, 5.1), -2);
  });
  it('should check `false`', function () {
    assert.notEqual(calculateNumber('SUBTRACT', 4.5, 5.6), -2);
  });
});

describe('DIVIDE', function () {
  it('should check equal', function () {
    assert.equal(calculateNumber('DIVIDE', 12, 3.5), 3);
  });
  it('should check for error', function () {
    assert.equal(calculateNumber('DIVIDE', 3, 0), 'Error');
  });
});
