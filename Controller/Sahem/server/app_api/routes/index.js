// const express = require('express');
import express from 'express';
import { authenticateJWT } from '../../middleware/authenticateJWT';
const router = express.Router();
// const ctrlProjects = require('../controllers/projects');
import ctrlProjects from '../controllers/projects';
// const ctrlReviews = require('../controllers/reviews');
// projects


router
    .route('/')
    .get((req, res) => {
        res.render('index', { title: 'Express' });
    });

router
    .route('/projects')
    .get((req, res) => {
        ctrlProjects.projectsList(req, res);
    })
    .post(authenticateJWT, (req, res) => {
        ctrlProjects.projectsCreate(req, res);
    });
router
    .route('/projects/:projectid')
    .get((req, res) => {
        ctrlProjects.projectsReadOne(req, res);
    })
    .put(authenticateJWT, (req, res) => {
        ctrlProjects.projectsUpdateOne(req, res);
    })
    .delete(authenticateJWT, (req, res) => {
        ctrlProjects.projectsDeleteOne(req, res);
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