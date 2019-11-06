const router = require('express').Router();
const User = require('../model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

router.post('/register', async (req,res)=>{

    //duplicate entry check by email
    const emailExist = await User.findOne({email: req.body.email})
    if(emailExist)
        return res.status(400).send('Email already exist');
        
    //hash then password with bcrypt
    // const salt = await bcrypt.genSalt(10);
    // const hashPassword = await bcrypt.hash(req.body.password,salt);
    
    //create user
    const user = new User({
        first_name: req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        password:hashPassword
    });
    try{
        const saveUser = await user.save();
        res.send(saveUser);
    }
    catch(err){
        res.status(400).send(err);
    }
});

router.post('/login', async (req,res)=>{
    const emailExist = await User.findOne({email: req.body.email})
    if(!emailExist)
        return res.status(400).send('Credentials not match');
    
    //without hash    
    const password_check = await User.findOne({password: req.body.password});
    if(!password_check)
        return res.status(400).send('Credentials not match');

    //bcrypt hashing
    // const password_check = await bcrypt.compare(req.body.password,emailExist.password);
    //     return res.status(400).send('Credentials not match');
        
    //create and assign token
    var WEB_TOKEN = 'qwqwqwqw'
    const token = jwt.sign({_id:User._id},WEB_TOKEN);
    res.header('auth-token',token).send(token);

    res.send('logged in Successfully !!!');    
});

module.exports = router;