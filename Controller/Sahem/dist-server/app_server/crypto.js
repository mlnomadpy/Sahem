"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHashedPassword = void 0;

var _crypto = _interopRequireDefault(require("crypto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const crypto = require('crypto');
var getHashedPassword = function getHashedPassword(password) {
  var sha256 = _crypto["default"].createHash('sha256');

  var hash = sha256.update(password).digest('base64');
  return hash;
};

exports.getHashedPassword = getHashedPassword;