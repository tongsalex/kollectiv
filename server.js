require('dotenv').config({ silent: true });
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const expressJWT = require('express-jwt');

const artistRoute = require('./routes/api/artist');
const blogRoute = require('./routes/api/blog');

const app = express();
const PORT = process.argv[2] || process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());

app.use(expressJWT({ secret: process.env.SECRET }).unless({ path: ['/api/artist/login', '/api/artist/signup', '/api/blog'] }));

app.use('/api/artist', artistRoute);
app.use('/api/blog', blogRoute);

app.listen(PORT, () => console.log('server here! listening on', PORT));
