const express=require('express');
const mongoose=require('mongoose');
const morgan=require('morgan');
const bodyParser  =require('body-parser');

mongoose.connect("mongodb://localhost:27017", {useNewUrlParser: true,useUnifiedTopology: true});

const db=mongoose.connection
db.on('error', (err) => {
    console.log(err)
})

db.once('open', (err) => {
    console.log("Database connection established")
})

const app=express()
app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json)
app.use(morgan('dev'))

const port= 3000;
app.listen(port,() => {
    console.log("Connected to port")
})
