

import express from 'express';
import helmet from 'helmet';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import logger from 'morgan';

import dotenv from 'dotenv';
import passport from 'passport';
import apiRouter from './app_api/routes/index';
import indexRouter from './app_server/routes/index';
import authRouter from './app_server/routes/auth';
import stripe from 'stripe';

dotenv.config();
//connect to db
stripe(process.env.STRIPE_SECRET_KEY);
require('./app_api/models/db');
require('./app_api/config/passport');
//init app
const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(passport.initialize());
app.use(helmet());
//define routes
app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/api', apiRouter);
app.get('/app', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
//TODO route to get, create and edit creators info
// app.use('/creators', creatorsRouter);
//TODO route to edit user info
// app.use('/user', userRouter);

// app.use('/projects', projectsRouter);
// app.use('/register', registerRouter);
export default app;
