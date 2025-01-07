import { expect } from 'chai';
import request from 'request';

describe('Test express app', function () {
  it('should check success response', function (done) {
    request.get('http://localhost:7865/cart/1', (_error, response, _body) => {
      expect(response.statusCode).to.be.equal(200);
      expect(response.body).to.be.equal('Payment methods for cart :1');
      done();
    });
  });
  it('should check error response', function (done) {
    request.get('http://localhost:7865/cart/a', (_error, response, _body) => {
      expect(response.statusCode).to.be.equal(404);
      done();
    });
  });
});
