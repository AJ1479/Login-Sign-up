const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:3000/db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err) => {
    if (err) {
        console.log(`Error: ${err}`);
    } else {
        console.log('Mongo Connection Success');
    }
});
