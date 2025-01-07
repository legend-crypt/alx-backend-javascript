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
  it('should check get form available payments', function (done) {
    request.get(
      'http://localhost:7865/available_payments',
      (_error, response, body) => {
        expect(response.statusCode).to.be.deep.equal(200);
        expect(JSON.parse(body)).to.be.deep.equal({
          payment_methods: { credit_cards: true, paypal: false },
        });
        done();
      }
    );
  });
  it('POST /login returns valid response', (done) => {
    request.post(
      `http://localhost:7865/login`,
      { json: { username: 'Pinkbrook' } },
      (_err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        expect(body).to.be.equal('Welcome Pinkbrook');
        done();
      }
    );
  });
});
