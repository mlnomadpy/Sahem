// const express = require('express');
import express from 'express';
import User from '../../app_api/models/User/User';
import ctrlAuth from '../controllers/auth';
const router = express.Router();
// const ctrlProjects = require('../controllers/projects');
// const ctrlReviews = require('../controllers/reviews');
//Auth Routes
router
    .route('/register')
    .post((req, res) => {
        ctrlAuth.register(req, res);
    });

router
    .route('/login')
    .post((req, res) => {
        ctrlAuth.login(req, res);
    });

//end of Auth Routes

export default router;