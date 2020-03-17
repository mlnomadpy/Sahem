// var express = require('express');
import express from 'express';
var router = express.Router();
var projectController = require('../controllers/projects');
/* GET projects data */
router.get('/', projectController.projects);
export default router;
// module.exports = router;
