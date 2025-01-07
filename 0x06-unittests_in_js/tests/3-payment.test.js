import { expect } from 'chai';
import sendPaymentRequestToApi from '../3-payment.js';
import Utils from '../utils.js';
import sinon from 'sinon';
describe('sendPaymentToApi', function () {
  it('should check how the sendPaymentRequestToApi uses calculateNumber', function () {
    const spyfunc = sinon.spy(Utils);
    sendPaymentRequestToApi(30, 100);
    expect(spyfunc.calculateNumber.calledWith('SUM', 30, 100)).to.be.true;
    expect(spyfunc.calculateNumber.calledTwice).to.be.true;
    spyfunc.calculateNumber.restore();
  });
});
