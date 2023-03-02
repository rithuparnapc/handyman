//import mongoose
const mongoose = require('mongoose');

//define the connection string
mongoose.connect('mongodb://localhost:27017/project',()=>{
    console.log('connected to mongodb');
})
//create model for  the EMPLOYEESs
const Employee=mongoose.model('Employee',{
    //schema creation
    id:Number,
    name:String,
    category:String,
    location:String,
    experience:String,
    payment:String
})
//create model for  the housekkepers
const Housekeeper=mongoose.model('Housekeeper',{
    //schema creation
    id:Number,
    name:String,
    category:String,
    location:String,
    experience:String,
    payment:String
})

//create model for  the painters
const Painter=mongoose.model('Painter',{
    //schema creation
    id:Number,
    name:String,
    category:String,
    location:String,
    experience:String,
    payment:String
})

//create model for  the plumbers
const Plumber=mongoose.model('Plumber',{
    //schema creation
    id:Number,
    name:String,
    category:String,
    location:String,
    experience:String,
    payment:String
})


//create model for add tobooking
const Booking=mongoose.model('booking',{
    id:Number,
    name:String,
    category:String,
    payment:String
})

//create model for join




module.exports={
    Employee,
    Housekeeper,
    Painter,
    Plumber,
    Booking

}
