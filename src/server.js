const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const mainRouter = require('./routes/main');
require('./models/db');

const app = express();

app.listen(4000, () => {
    console.log('Listening on port 4000');
});

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: 'shhh',
    resave: false,
    saveUninitialized: true,
}));

app.use('/', mainRouter);
