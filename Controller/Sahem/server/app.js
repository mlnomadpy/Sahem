

import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import logger from 'morgan';

import dotenv from 'dotenv';
import passport from 'passport';
import apiRouter from './app_api/routes/index';
import indexRouter from './app_server/routes/index';

dotenv.config();
//connect to db
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

//define routes
app.use('/', indexRouter);
app.use('/api', apiRouter);
// app.use('/users', usersRouter);
// app.use('/projects', projectsRouter);
// app.use('/register', registerRouter);
export default app;
