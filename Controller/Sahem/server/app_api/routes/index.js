// const express = require('express');
import express from 'express';
const router = express.Router();
// const ctrlProjects = require('../controllers/projects');
import ctrlProjects from '../controllers/projects';
// const ctrlReviews = require('../controllers/reviews');
// projects
router
    .route('/projects')
    .get(ctrlProjects.projectsList)
    .post(ctrlProjects.projectsCreate);
router
    .route('/projects/:projectid')
    .get(ctrlProjects.projectsReadOne)
    .put(ctrlProjects.projectsUpdateOne)
    .delete(ctrlProjects.projectsDeleteOne);


router
    .route('/')
    .get('index.html', (res, rej) => {
        res.render('index', { title: 'Express' });
    });
// reviews
// router
//     .route('/locations/:fundraiserid/fundraiser')
//     .post(ctrlReviews.fundraiserCreate);
// router
//     .route('/locations/:fundraiserid/fundraiser/:fundraiserid')
//     .get(ctrlReviews.fundraiserReadOne)
//     .put(ctrlReviews.fundraiserUpdateOne)
//     .delete(ctrlReviews.fundraiserDeleteOne);

export default router;
// module.exports = router;