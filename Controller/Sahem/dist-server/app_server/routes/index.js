"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _signup = _interopRequireDefault(require("../controllers/signup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const express = require('express');
var router = _express["default"].Router(); // const ctrlProjects = require('../controllers/projects');


// const ctrlReviews = require('../controllers/reviews');
// locations
router.route('/signup').post(_signup["default"].createUser);
var _default = router;
exports["default"] = _default;