const express = require("express");
const app = express()
const db = require('./db')

db()


app.use(express.json());
const educationalRoute = require('./routes/educational')

app.use('/',educationalRoute);

// require('dotenv').config(); // Loads variables from .env


// app.post('/educational',(req,res)=>{
//     const data = req.body
//     console.log(data)
//     res.send(data)
// })

app.listen(3100,()=>{
    console.log("running")
})
