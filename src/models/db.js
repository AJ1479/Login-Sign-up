const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydb', (err) => {
    if (err) {
        console.log(`Error: ${err}`);
    } else {
        console.log('Mongo Connection Success');
    }
});
