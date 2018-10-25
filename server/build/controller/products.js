'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.getSingle = exports.getAll = exports.findById = undefined;var _products = require('../models/products');var _products2 = _interopRequireDefault(_products);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var findById = exports.findById = function findById(productId) {
  var isFound = false;
  var product = _products2.default.find(function (singleProduct) {
    console.log(singleProduct);
    singleProduct.id == productId;
    isFound = true;
    return singleProduct;
  });
  if (isFound) {
    return singleProduct;
  }
};

var getAll = exports.getAll = function getAll(req, res) {
  res.status(200).json({
    status: 'success',
    products: _products2.default });

};


var getSingle = exports.getSingle = function getSingle(req, res) {var
  productId = req.params.productId;
  var product = findById(productId);
  if (product) {
    return res.status(200).json({
      status: 'success',
      product: product });

  }
  return res.status(404).json({
    status: 'error',
    message: 'No product with the given ID found. Please try again' });

};exports.default =

_products2.default;