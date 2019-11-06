const jwt = require('jsonwebtoken');

var WEB_TOKEN = 'qwqwqwqw'
module.exports = function(req,res,next){
    const token = req.header('auth-token');
    if(!token)
        return res.status(401).send('ACCESS DENIED');
    try{
        const verified = jwt.verify(token,WEB_TOKEN);
         req.User = verified;
         next();
    }
    catch(err){
        res.status(401).send('Invalid Token');
    }
}