const assert = require('assert');
const calculateNumber = require('../0-calcul.js');
assert.equal(calculateNumber(5.5, 3.2), 9);
assert.equal(calculateNumber(5.5, 3.2), 9);
assert.notEqual(calculateNumber(5.3, 3.2), 8);
assert.equal(calculateNumber(1.5, 3.2), 5);
