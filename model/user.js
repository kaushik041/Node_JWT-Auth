const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    first_name:{
        type:String
    },
    last_name:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('UserModel',userSchema);