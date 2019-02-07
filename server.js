//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");//getting data from the user (post)
const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile("/index.html",{root: __dirname });

});




app.listen(5000,function(){
  console.log("Server is running on port 5000.");
});
