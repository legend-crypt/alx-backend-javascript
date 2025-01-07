// const calculateNumber = require('../2-calcul_chai');
// const chai = require('chai');
// const expect = chai.expect;
import { expect } from 'chai';
import calculateNumber from '../2-calcul_chai.js';

describe('SUM', function () {
  it('should check equal', function () {
    expect(calculateNumber('SUM', 3.4, 4.5)).to.be.equal(8);
  });
  it('should check false', function () {
    expect(calculateNumber('SUM', 3.5, 5.5)).to.be.not.equal(9);
  });
});

describe('SUBTRACT', function () {
  it('should check equal', function () {
    expect(calculateNumber('SUBTRACT', 3.4, 5.1)).to.be.equal(-2);
  });
  it('should check `false`', function () {
    expect(calculateNumber('SUBTRACT', 4.5, 5.6)).to.be.not.equal(-2);
  });
});

describe('DIVIDE', function () {
  it('should check equal', function () {
    expect(calculateNumber('DIVIDE', 12, 3.5)).to.be.equal(3);
  });
  it('should check for error', function () {
    expect(calculateNumber('DIVIDE', 3, 0)).to.be.equal('Error');
  });
  it('should check error return type', function () {
    expect(calculateNumber('DIVIDE', 4, 0)).to.be.a('string');
  });
});
