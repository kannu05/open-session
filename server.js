var express = require('express');
var url = require('url');
var bodyParser = require('body-parser');




// all the routes  js files  
//var index = require("./routes/index");   
//var login = require("./routes/login");
//var signup = require("./routes/signup");
var event = require("./routes/event");
var app= express();


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));   // this is used   set statuc files path 

app.set('view engine','ejs');



//app.use('/',index);     // first page open
//app.use('/home',login);  // it is calling login check script
//app.use('/signup',signup);  // for new user enrty 

app.use('/event',event);
app.listen(3000);
console.log("server on ");
