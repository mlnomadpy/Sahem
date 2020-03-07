const express = require('express');
const router = express.Router();
const ctrlProjects = require('../controllers/projects');
// const ctrlReviews = require('../controllers/reviews');
// locations
router
    .route('/projects')
    .get(ctrlProjects.projectsList)
    .post(ctrlProjects.projectsCreate);
router
    .route('/projects/:projectid')
    .get(ctrlProjects.projectsReadOne)
    .put(ctrlProjects.projectsUpdateOne)
    .delete(ctrlProjects.projectsDeleteOne);
// reviews
// router
//     .route('/locations/:locationid/reviews')
//     .post(ctrlReviews.reviewsCreate);
// router
//     .route('/locations/:locationid/reviews/:reviewid')
//     .get(ctrlReviews.reviewsReadOne)
//     .put(ctrlReviews.reviewsUpdateOne)
//     .delete(ctrlReviews.reviewsDeleteOne);
module.exports = router;