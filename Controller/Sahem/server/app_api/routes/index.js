import express from 'express';
// import { authenticateJWT } from '../../middleware/authenticateJWT';
import passport from 'passport';
const router = express.Router();
import ctrlProjects from '../controllers/projects';
// const ctrlReviews = require('../controllers/reviews');
// projects
require('../../middleware/passport')(passport);


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
    .post(passport.authenticate('jwt', { session: false }), (req, res) => {
        console.log(req.user);
        ctrlProjects.projectsCreate(req, res);
    });
router
    .route('/projects/:projectid')
    .get((req, res) => {
        ctrlProjects.projectsReadOne(req, res);
    })
    .put(passport.authenticate('jwt', { session: false }), (req, res) => {
        ctrlProjects.projectsUpdateOne(req, res);
    })
    .delete(passport.authenticate('jwt', { session: false }), (req, res) => {
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