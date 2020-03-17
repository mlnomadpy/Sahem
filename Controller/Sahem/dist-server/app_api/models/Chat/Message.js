"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Message = exports.MessageSchema = void 0;

var _mongoose = _interopRequireWildcard(require("mongoose"));

var _mongooseTimestamp = _interopRequireDefault(require("mongoose-timestamp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var MessageSchema = new _mongoose.Schema({
  sent_time: {
    type: Date.now
  },
  receive_time: {
    type: Date
  },
  read_time: {
    type: Date
  },
  read_by: {
    type: [_mongoose["default"].Types.ObjectId],
    ref: 'Fundraiser'
  },
  delivered_to: {
    type: [_mongoose["default"].Types.ObjectId],
    ref: 'Fundraiser'
  },
  owner: {
    type: _mongoose["default"].Types.ObjectId,
    ref: 'Fundraiser'
  }
});
exports.MessageSchema = MessageSchema;
MessageSchema.plugin(_mongooseTimestamp["default"]);
MessageSchema.index({
  createdAt: 1,
  updatedAt: 1
});

var Message = _mongoose["default"].model('Message', MessageSchema);

exports.Message = Message;