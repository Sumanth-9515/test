const express = require('express');
const mysql2 = require('mysql2');

const app = express();


var connection=mysql2.createConnection({

    host:"localhost",
    user:"root",
    password:"123456",
    database:"practice"

})


connection.connect((err)=>{

    if(err){
        
        console.log(err.message);
        
    }else{
        console.log("mysql connected ");
        
    }
    
    })

app.get("/data",(req,res)=>{
    const query="SELECT * from emp"
    //  db.query(err,data)=>{

        if(err){
            console.log("no data");
            
        }
        else{
            console.log(data);
            
        }

     
})
app.listen(4005,()=>{
    console.log("iam in server");
    
})