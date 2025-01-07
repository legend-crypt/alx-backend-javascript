import { expect } from 'chai';
import request from 'request';

describe('Test express app', function () {
  it('should check response status code', function (done) {
    request.get('http://localhost:7865', (_error, response, _body) => {
      expect(response.statusCode).to.be.equal(200);
      expect(response.body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
