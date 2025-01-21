var express = require("express");

var app = express();


var craterouter=require("./craterouter.js");
var updaterouter=require("./updaterouter");
var deleterouter=require("./deleterouter")



app.use("/create",craterouter)

app.use("/update",updaterouter)

app.use("/delete",deleterouter)


app.get("/", (req, res) => {
    res.send("hi this is an root api ");
  });
  
  app.listen(3007, () => {
    console.log("hi server is working");
  });