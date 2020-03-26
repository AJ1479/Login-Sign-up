const express = require('express');
const User = require('../models/user.model');
const session = require('express-session');
const bcrypt = require('bcrypt');
const saltRounds = 10;



const router=express.Router();

router.get('/signup', (req, res) => {
    res.render('index');
});

router.post('/signup', async (req, res) => {
    const { username, email, pass } = req.body;
    const hash = bcrypt.hashSync((pass, saltRounds), async() =>{

    const userObj = new User(
        {
            username,
            email,
            password: hash,
        },
)});
    try {
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

router.post('/login', async(req,res)=>{
    const{name, pass} = req.body;
    try{
    const doc = await User.findOne({ username: name });
    if(bcrypt.compareSync(pass, doc.password)){
        req.session.username= name;
        res.send('You have been logged in');
    }
}catch(err){
    res.send('There was an error');
}});

router.get('/logout', (req, res) => 
{
   if(req.session.username)
    {
 req.session.destroy();
 res.send('You have been logged out')
    }
});






module.exports = router;