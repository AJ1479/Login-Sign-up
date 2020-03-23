const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mainRouter = require('./routes/main');

require('./models/db');
const app = express();



app.listen(3000, () => {
    console.log('Listening on port 3000');
});

app.use('/', mainRouter);
