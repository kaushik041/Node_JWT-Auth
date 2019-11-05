const express = require('express');
const app = express();
const mongoose = require('mongoose');

//import routing
const AuthRoute = require('./router/auth');

//mongoDB Connection
var connect_url = 'mongodb://localhost:27017/node-jwt';
mongoose.connect(
    connect_url, 
    { useNewUrlParser: true },
    ()=>console.log('database connected')
);

//middleware
app.use(express.json());

//router middleware
app.use('/auth/user',AuthRoute);

app.listen(3000,()=>console.log('Server Running'));
