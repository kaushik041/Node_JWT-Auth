const router = require('express').Router();
const verify = require('./verifyToken');
router.get('/',verify,(req,res)=>{
    res.json({
        posts:{
            title:'1st post'
        }
    })
})

module.exports = router;