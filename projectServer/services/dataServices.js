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
module.exports={
    getEmployees
}