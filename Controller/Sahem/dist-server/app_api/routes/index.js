"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _projects = _interopRequireDefault(require("../controllers/projects"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const express = require('express');
var router = _express["default"].Router(); // const ctrlProjects = require('../controllers/projects');


// const ctrlReviews = require('../controllers/reviews');
// locations
router.route('/projects').get(_projects["default"].projectsList).post(_projects["default"].projectsCreate);
router.route('/projects/:projectid').get(_projects["default"].projectsReadOne).put(_projects["default"].projectsUpdateOne)["delete"](_projects["default"].projectsDeleteOne); // reviews
// router
//     .route('/locations/:fundraiserid/fundraiser')
//     .post(ctrlReviews.fundraiserCreate);
// router
//     .route('/locations/:fundraiserid/fundraiser/:fundraiserid')
//     .get(ctrlReviews.fundraiserReadOne)
//     .put(ctrlReviews.fundraiserUpdateOne)
//     .delete(ctrlReviews.fundraiserDeleteOne);

var _default = router; // module.exports = router;

exports["default"] = _default;