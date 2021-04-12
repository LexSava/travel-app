require('dotenv').config();
import path = require('path');
import express = require('express');
import cors = require('cors');
import helmet = require('helmet');
import { StatusCodes } from 'http-status-codes';
import errorMiddleware = require('./middleware/error-middleware');
import requestLogMiddleware = require('./middleware/request-logger');

import countryRouter = require('./modules/countries/country.router');
import userRouter = require('./modules/users/user.router');

const app = express();

app.use(cors());
app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.json());

app.use(requestLogMiddleware);

app.use(express.static(path.join(__dirname, '../../frontend/build')));

app.use('/favicon.ico', (req, res) => res.sendStatus(StatusCodes.NO_CONTENT));

// Routers
app.use('/api/countries', countryRouter);
app.use('/api/users', userRouter);

app.use(errorMiddleware);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/build', 'index.html'));
});

export = app;
