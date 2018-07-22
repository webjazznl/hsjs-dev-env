//use express as dev server
var express = require('express');
// support operations on request path
var path = require('path');
// object top open a browser
var open = require('open');
//define a port
var port = 3000;
// create an express application
var app = express();
//define action for '/'
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname,'../src/index.html'));
});

//start listening on port and open a browser (log error if any)
app.listen(port, function(error){
  if(error) {
    console.log(error);
  } else {
    open('http://localhost:' + port);
  }
});
