import Utils from '../utils.js';
import sinon from 'sinon';
import sendPaymentRequestToApi from '../4-payment.js';
import { expect } from 'chai';

describe('sendPaymentRequestToApi', () => {
  let spy;
  beforeEach(() => {
    spy = sinon.spy(console, 'log');
  });
  afterEach(() => {
    spy.restore();
  });
  it('sendPaymentRequestToApi  with the right arguments `100`, `20`', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledWith('The total is: 120')).to.be.true;
    expect(spy.callCount).to.be.equal(1);
  });
  it('sendPaymentRequestToApi with the right arguments `10`, `10`', () => {
    sendPaymentRequestToApi(10, 10);
    expect(spy.calledWith('The total is: 20')).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });
});
