'use strict';var _chai = require('chai');var _chai2 = _interopRequireDefault(_chai);
var _chaiHttp = require('chai-http');var _chaiHttp2 = _interopRequireDefault(_chaiHttp);
var _index = require('../index');var _index2 = _interopRequireDefault(_index);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var

expect = _chai2.default.expect;
_chai2.default.use(_chaiHttp2.default);

describe('Get Request to /products endpoint', function () {
  it('should return status 200 and an array of products', function (done) {
    _chai2.default.request(_index2.default).
    get('/products').
    end(function (err, res) {
      expect(res.status).to.be.equal(200);
      expect(res.body).to.have.property('products');
      expect(res.body).to.have.property('products').to.be.an('array');
      done();
    });
  });
});

describe('Get Request to /products/:productId endpoint', function () {
  it('should return status 200 and the product with the given Id', function (done) {
    _chai2.default.request(_index2.default).
    get('/products/234B52').
    end(function (err, res) {
      expect(res.status).to.be.equal(200);
      expect(res.body).to.have.property('product');
      expect(res.body).to.have.property('product').to.be.an('object');
      done();
    });
  });

  it('should return status 404 if no product with the given Id is found', function (done) {
    _chai2.default.request(_index2.default).
    get('/products/tfd').
    end(function (err, res) {
      expect(res.status).to.be.equal(404);
      done();
    });
  });
});