'use strict';var _express = require('express');var _express2 = _interopRequireDefault(_express);
var _bodyParser = require('body-parser');var _bodyParser2 = _interopRequireDefault(_bodyParser);
var _morgan = require('morgan');var _morgan2 = _interopRequireDefault(_morgan);
var _routes = require('./routes');var _routes2 = _interopRequireDefault(_routes);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var app = (0, _express2.default)();
app.use((0, _morgan2.default)('dev'));

app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());

app.use(_routes2.default);
app.get('/', function (req, res) {
  res.json({
    status: 'success',
    message: 'Welcome to Store-Manager by Aprekuma Tamunoibi' });

});

app.use(function (req, res) {
  res.status(404).json({
    status: 'error',
    message: 'Nothing found here please check the route and try again' });

});

module.exports = app;