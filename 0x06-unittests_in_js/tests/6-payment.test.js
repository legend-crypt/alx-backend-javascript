import { expect } from 'chai';
import getPaymentTokenFromAPI from '../6-payment_token.js';

describe('getPaymentTokenFromAPI', function () {
  it('should return successfull response', function (done) {
    getPaymentTokenFromAPI(true).then((res) => {
      expect(res).to.deep.equal({
        data: 'Successful response from the API',
      });
      done();
    });
  });
});
