const express = require('express');
const session = require('express-session');
const Bcrypt = require("bcryptjs");
const Users = require('../models/Users.model');
var sess;
const router = express.Router();

router.get('/signup', (req, res) => {
    res.render('index');
});

router.post('/signup', async (req, res) => {
    const { username, emailid } = req.body;
    const UsersObj = new User(
        {
            username,
            emailid,
            
            // async(password) => {
            //     password: Bcrypt.hashSync(request.body.password, 10),
            // }
        },
    );
    try {
        await UsersObj.save();
        res.send('User saved you can log in now');
        res.render('index1');
    } catch (err) {
        res.send('There was an error');
        console.log(err);
    }
});

router.get('/login', (req, res) => {
    res.render('index1');
});
router.post('/login', async (req, res) => {
    const { name, pass} = req.body;

    try{
    const doc = await User.findOne({ username: name });
    if(doc)
    {
        if(Bcrypt.compareSync(doc.password, pass))
        {
            sess = req.session;
            sess.email = req.body.email;
            res.send('loggedin');
        }
    }}catch (err) {
        res.render('errorindex');
    }
 
});

router.get('/logout',(req,res) => {
    req.session.destroy((err) => {
        if(err) {
            return console.log(err);
        })
        res.render('loggedout');
    });


module.exports = router;
