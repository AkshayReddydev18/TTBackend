const mongoose = require('mongoose');
require("dotenv").config

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.mongo_url);
        console.log('MongoDB Connected: ${conn.connect.host}');
    }
    catch(error){
        console.log(error)
        process.exit(1)
    }
}
module.exports = connectDB
