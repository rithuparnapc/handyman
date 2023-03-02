 const { default: mongoose } = require('mongoose');
const db = require('./db');

//get all employees details from db

const getEmployees=()=>{
   return db.Employee.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    employees:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:402,
                    message: 'not found'
                
                }
            }
        }
    )
}

//get all house keepers details from db
const getHousekeepers=()=>{
    return db.Housekeeper.find().then(
         (result)=>{
             if(result){
                 return{
                     status:true,
                     statusCode:200,
                     housekeepers:result
                 }
             }
             else{
                 return{
                     status:false,
                     statusCode:402,
                     message: 'not found'
                 
                 }
             }
         }
     )
 }

 //get all painters details from db
const getPainters=()=>{
    return db.Painter.find().then(
         (result)=>{
             if(result){
                 return{
                     status:true,
                     statusCode:200,
                     painters:result
                 }
             }
             else{
                 return{
                     status:false,
                     statusCode:402,
                     message: 'not found'
                 
                 }
             }
         }
     )
 }

  //get all painters details from db
const getPlumbers=()=>{
    return db.Plumber.find().then(
         (result)=>{
             if(result){
                 return{
                     status:true,
                     statusCode:200,
                     plumbers:result
                 }
             }
             else{
                 return{
                     status:false,
                     statusCode:402,
                     message: 'not found'
                 
                 }
             }
         }
     )
 }

 //join details store to db
 const join=(name,category,location,experience,payment)=>{
    
              const  newJoin= new db.Employee({
                name,category,location,experience,payment
                })
                newJoin.save()
                 return{
                     status:true,
                     statusCode:200,
                     message: 'joined '
                 
                 }
             }
         
     
 

 //delete wishlist
 const deletebook=(name)=>{
    return db.Booking.deleteOne({name}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                     statusCode:200,
                     message:'booking canceled'
                }
            }else{
                
                return{
                    status:false,
                         statusCode:402,
                         message: 'You have no bookings'
                }
            }
        }
    )
 }

module.exports={
    getEmployees,
    getHousekeepers,
    getPainters,
    getPlumbers,
    
    
    deletebook,
    join

}