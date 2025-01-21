


var express=require("express");

var router=express.Router();


var controller= require("./createcontroller.js")

router.post("/users1",controller.users1data)




module.exports=router;