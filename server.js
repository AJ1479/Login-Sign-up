const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const Bcrypt = require("bcryptjs");


const mainRouter = require('./routes/main');

require('./models/db');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

app.use('/', mainRouter);
