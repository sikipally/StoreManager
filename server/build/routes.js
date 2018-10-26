'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _express = require('express');var _express2 = _interopRequireDefault(_express);
var _products = require('./controllers/products');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var router = _express2.default.Router();

router.get('/products', _products.getAllProducts);
router.get('/products/:productId', _products.getSingleProduct);exports.default =

router;