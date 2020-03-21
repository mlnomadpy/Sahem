"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Project = exports.ProjectSchema = void 0;

var _mongoose = _interopRequireWildcard(require("mongoose"));

var _mongooseTimestamp = _interopRequireDefault(require("mongoose-timestamp"));

var _Vote = require("./Vote");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// const Fundraiser = require('../User/fundraiser').fundRaiserSchema;
//Project schema
var ProjectSchema = new _mongoose.Schema({
  category: {
    type: String
  },
  owner: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Fundraiser' // required: true

  },
  content: {
    type: String // required: true

  },
  description: {
    type: String // required: true

  },
  fundGoal: {
    type: Number // required: true

  },
  raisedFunding: {
    type: Number,
    "default": 0
  },
  createdDate: {
    type: Date,
    "default": Date.now()
  },
  endDate: {
    type: Date // required: true  

  },
  fundraisers: {
    type: [_mongoose.Schema.Types.ObjectId],
    ref: 'Creator',
    "default": null
  },
  votes: {
    type: [_Vote.VoteSchema]
  },
  comments: {
    type: [_mongoose.Schema.Types.ObjectId],
    ref: 'Comment'
  } // medias: {
  //     type: [Media]
  // }

});
exports.ProjectSchema = ProjectSchema;
ProjectSchema.plugin(_mongooseTimestamp["default"]);
ProjectSchema.index({
  createdAt: 1,
  updatedAt: 1
});

var Project = _mongoose["default"].model("Project", ProjectSchema);

exports.Project = Project;