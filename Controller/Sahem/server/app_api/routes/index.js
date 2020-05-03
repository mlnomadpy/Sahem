import express from 'express';
// import { authenticateJWT } from '../../middleware/authenticateJWT';
import passport from 'passport';
const router = express.Router();
import ctrlProjects from '../controllers/projects';
import ctrlCreators from '../controllers/Creators';
import { getCreator } from '../../middleware/creatorGetter';
// const ctrlReviews = require('../controllers/reviews');
// projects
require('../../middleware/passport')(passport);
import { upload } from '../../middleware/upload';


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
    .post(passport.authenticate('jwt', { session: false }), getCreator, upload.fields([{ name: 'header_image', maxCount: 1 }, { name: 'thumbnail', maxCount: 1 }])
        , (req, res) => {
            // getCreator(req, res);
            ctrlProjects.projectsCreate(req, res);
        });
router
    .route('/projects/:projectid')
    .get((req, res) => {
        ctrlProjects.projectsReadOne(req, res);
    })
    .put(passport.authenticate('jwt', { session: false }), upload.fields([{ name: 'header_image', maxCount: 1 }, { name: 'thumbnail', maxCount: 1 }])
        , (req, res) => {
            ctrlProjects.projectsUpdateOne(req, res);
        })
    .delete(passport.authenticate('jwt', { session: false }), (req, res) => {
        ctrlProjects.projectsDeleteOne(req, res);
    });

// TODO Add comments
// router
//     .route('/projects/:projectid/comments')
//     .get((req, res) => {

//     })

router
    .route('/creators')
    .get((req, res) => {

        ctrlCreators.creatorsList(req, res);

    })
    .post(passport.authenticate('jwt', { session: false }), upload.single('avatar'), (req, res) => {
        // getCreator(req, res);
        ctrlCreators.creatorsCreate(req, res);
    });
// .put(passport.authenticate('jwt', { session: false }), (req, res) => {
//     getCreator(req, res);
//     ctrlCreators.creatorsUpdateOne(req, res);
// });
router
    .route('/creators/:creatorid')
    .get((req, res) => {
        ctrlCreators.creatorsReadOne(req, res);
    });
// .put(passport.authenticate('jwt', { session: false }), (req, res) => {
//     const { creatorid } = req.params;

//     getCreator(req, res);
//     // check if the creators requesting to update is the real owner of 
//     // the creator who is trying to change
//     if (req.creator._id != creatorid) {
//         res
//             .status(403)
//             .json(
//                 {
//                     "message": "Not you"
//                 }
//             );
//     }
//     ctrlCreators.creatorsUpdateOne(req, res);
// });

router
    .route('/creators/profile')
    .get(passport.authenticate('jwt', { session: false }), (req, res) => {
        getCreator(req, res);
        const creator = req.creator;
        res.json({
            creator
        });
        //todo check the creator is created else return null nad redirect to creator profile create
    })
    .put(passport.authenticate('jwt', { session: false }), upload.single('avatar'), (req, res) => {
        // const { creatorid } = req.params;

        getCreator(req, res);

        // check if the creators requesting to update is the real owner of 
        // the creator who is trying to change
        // if (req.creator._id != creatorid) {
        //     res
        //         .status(403)
        //         .json(
        //             {
        //                 "message": "Not you"
        //             }
        //         );
        // }
        ctrlCreators.creatorsUpdateOne(req, res);
    });


export default router;
// module.exports = router;