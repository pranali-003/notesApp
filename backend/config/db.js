const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async()=>{
    await mongoose.connect(process.env.URL)
    .then(()=>{
        console.log("Connected Successfully");
    })
    .catch(()=>{
        console.log("Connection Failed!")
    })
}

module.exports =  connectDB;

