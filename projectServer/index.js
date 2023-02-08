//import express
const express = require('express');

//import cors
const cors = require('cors');

//import dataServices
const dataServices = require('./services/dataServices');

//create application using express
const app = express();

//use json parser for server response
app.use(express.json());

//using cors specify the origin to the server
app.use(cors({
    origin:'http://localhost:4200'
}));

//setup a port
app.listen(3000,()=>{
    console.log('listening to port:3000');
})



//api call to get all employees
app.get('/all-employees',(req,res)=>{
    dataServices.getEmployees().then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})