"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// var express = require('express');
var router = _express["default"].Router();

var projectController = require('../controllers/projects');
/* GET projects data */


router.get('/', projectController.projects);
var _default = router; // module.exports = router;

exports["default"] = _default;