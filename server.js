const express = require('express');
const bodyParser = require('body-parser');
const mainRouter = require('./routes/main');
const app=express();

app.listen(4000, () =>{
console.log('Listening on port 4000');
});

app.use('/',mainRouter);