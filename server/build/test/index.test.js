'use strict';var _chai = require('chai');var _chai2 = _interopRequireDefault(_chai);
var _chaiHttp = require('chai-http');var _chaiHttp2 = _interopRequireDefault(_chaiHttp);
var _index = require('../index');var _index2 = _interopRequireDefault(_index);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var

expect = _chai2.default.expect;
_chai2.default.use(_chaiHttp2.default);

describe('Home route', function () {
  it('should return status 200 and a message', function (done) {
    _chai2.default.request(_index2.default).
    get('/').
    end(function (err, res) {
      expect(res.status).to.be.equal(200);
      done();
    });
  });
});

describe('No matching routes', function () {
  it('should return status 404 and a message', function (done) {
    _chai2.default.request(_index2.default).
    get('/dsddsdsds').
    end(function (err, res) {
      expect(res.status).to.be.equal(404);
      done();
    });
  });
});