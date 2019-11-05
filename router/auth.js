const router = require('express').Router();
const User = require('../model/user');
//const joi = require('@hapi/joi');

//joi validation
// const schema = {
//     first_name:joi.string().required(),
//     last_name:joi.string().required(),
//     email:joi.string().min(5).email(),
//     password:joi.string().min(4)
// }

router.post('/register', async (req,res)=>{
    // const {error} = joi.validation(req.body,schema);
    // res.send(error.details);
    const user = new User({
        first_name: req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        password:req.body.password
    });
    try{
        const saveUser = await user.save();
        res.send(saveUser);
    }
    catch(err){
        res.status(400).send(err);
    }
});

module.exports = router;