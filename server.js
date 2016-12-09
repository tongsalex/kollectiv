'use strict';

const dotenv = require('dotenv').config({ silent: true });
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const artistRoute = require('./routes/api/artist');
const authRoute = require('./routes/api/auth');

const app = express();
const PORT = process.argv[2] || process.env.PORT || 3000;

app.set('superSecret', process.env.JWT_SECRET);

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json());

app.use('/api/artist', artistRoute);
app.use('/api/auth', authRoute);

app.listen(PORT, () => console.log('server here! listening on', PORT));
