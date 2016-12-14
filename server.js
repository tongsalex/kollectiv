require('dotenv').config({ silent: true });
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const expressJWT = require('express-jwt');

const userRoute = require('./routes/api/user');
const blogRoute = require('./routes/api/blog');
const accountRoute = require('./routes/api/account');
const accountBlogPosts = require('./routes/api/accountBlogPosts');

const app = express();
const PORT = process.argv[2] || process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());

app.use(expressJWT({ secret: process.env.SECRET }).unless({ path: ['/favicon.ico', '/api/user/login', '/api/user/signup', '/api/blog', /^\/api\/blog\/.*/] }));

app.use('/api/user', userRoute);
app.use('/api/blog', blogRoute);
app.use('/api/account', accountRoute);
app.use('/api/accountBlogPosts', accountBlogPosts);

app.listen(PORT, () => console.log('server here! listening on', PORT));
