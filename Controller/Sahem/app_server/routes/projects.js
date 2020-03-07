var express = require('express');
var router = express.Router();
var projectController = require('../controllers/projects');
/* GET projects data */
router.get('/', projectController.projects);

module.exports = router;
