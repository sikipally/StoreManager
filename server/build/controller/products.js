'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.create = exports.getSingle = exports.getAll = exports.findById = undefined;var _products = require('../models/products');var _products2 = _interopRequireDefault(_products);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var findById = exports.findById = function findById(productId) {
  var product = _products2.default.find(function (singleProduct) {return singleProduct.id === productId;});
  return product;
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

};

var create = exports.create = function create(req, res) {var _req$body =
  req.body,name = _req$body.name,category = _req$body.category,price = _req$body.price;
  if (!name || !category || !price) {
    return res.status(400).json({
      status: 'error',
      message: 'All fields are required. Please fill them' });

  }
  var product = {
    id: '234B0' + (_products2.default.length - 5 + 1),
    name: name,
    category: category,
    price: parseInt(price, 10) };

  _products2.default.push(product);
  return res.status(201).json({
    status: 'success',
    product: product });

};exports.default =

_products2.default;