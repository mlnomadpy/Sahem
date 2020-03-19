// const express = require('express');
import express from 'express';
const router = express.Router();
// const ctrlProjects = require('../controllers/projects');
import ctrlSignUp from '../controllers/signup';
// const ctrlReviews = require('../controllers/reviews');
// locations
router
    .route('/signup')
    .post(ctrlSignUp.createUser);

export default router;