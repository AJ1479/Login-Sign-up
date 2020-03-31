const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user.model');

const router = express.Router();

router.get('/signup', (req, res) => {
    res.render('index');
});

router.post('/signup', async (req, res) => {
    const saltRounds = 10;
    const { username, email, pass } = req.body;
    try {
        const userObj = new User({
            username,
            email,
            password: pass,
        });
        userObj.password = await bcrypt.hash(pass, saltRounds);
        await userObj.save();
        res.send('User saved you can now login in');
    } catch (err) {
        res.send('There was an error');
        console.log(err);
    }
});

router.get('/login', (req, res) => {
    res.render('index1');
});

router.post('/login', async (req, res) => {
    const { name, pass } = req.body;
    try {
        const doc = await User.findOne({ username: name });
        if (bcrypt.compareSync(pass, doc.password)) {
            req.session.username = name;
            res.send('You have been logged in');
        }
    } catch (err) {
        res.send('There was an error');
    }
});

router.get('/logout', async (req, res) => {
    if (req.session.username) {
        await req.session.destroy();
        res.send('You have been logged out');
    }
});

module.exports = router;
