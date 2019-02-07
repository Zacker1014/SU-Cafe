//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");//getting data from the user (post)
const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));


app.use(express.static(__dirname));



app.get('/', function(req, res){
  res.sendfile(__dirname + 'index.html');
});


// app.get('/menu.html',function(req,res){
//   var bagal = req.body.bagel;
// });





app.listen(5000,function(){
  console.log("Server is running on port 5000.");
});
