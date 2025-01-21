var mysql2=require("mysql2");

var connection =mysql2.createConnection({

    host:"localhost",
    user:"root",
    password:"123456",
    database:"practice",
    port: 3307
})


connection.connect((err)=>{

    if(err){
        console.log(err);
        
    }else{
        console.log("hi connected to mysql");
        
    }

})



module.exports=connection;