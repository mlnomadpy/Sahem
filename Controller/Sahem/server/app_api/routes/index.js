// const express = require('express');
import express from 'express';
const router = express.Router();
// const ctrlProjects = require('../controllers/projects');
import ctrlProjects from '../controllers/projects';
// const ctrlReviews = require('../controllers/reviews');
// projects
router
    .route('/projects')
    .get((req, res) => {
        ctrlProjects.projectsList
    })
    .post((req, res) => {
        ctrlProjects.projectsCreate
    });
router
    .route('/projects/:projectid')
    .get((req, res) => {
        ctrlProjects.projectsReadOne
    })
    .put((req, res) => {
        ctrlProjects.projectsUpdateOne
    })
    .delete((req, res) => {
        ctrlProjects.projectsDeleteOne
    });


router
    .route('/')
    .get((res, rej) => {
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