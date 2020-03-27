import express from 'express';
import User from '../../app_api/models/User/User';
import ctrlAuth from '../controllers/auth';
const router = express.Router();
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
//create a forgot password

//end of Auth Routes

export default router;