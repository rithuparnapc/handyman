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
module.exports={
    Employee
}
