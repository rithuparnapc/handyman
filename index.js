//import express
const express = require('express');

//import cors
const cors = require('cors');

//import dataServices
const dataServices = require('./services/dataServices');
const { Employee } = require('./services/db');

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

//api call to get all housekeepers
app.get('/housekeepers',(req,res)=>{
    dataServices. getHousekeepers().then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})

//api call to get all painters
app.get('/painters',(req,res)=>{
    dataServices. getPainters().then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})

//api call to get all plumbers
app.get('/plumbers',(req,res)=>{
    dataServices. getPlumbers().then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})

//api call to addtobooking
app.post('/join',(req,res)=>{
    dataServices.join(req.body.experience,req.body.name,req.body.location,req.body.category,req.body.payment).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})


//delete bookings
app.delete('/deletebook/:name',(req,res)=>{
    dataServices.deletebook(req.params.name).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})
