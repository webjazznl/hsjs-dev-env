//use express as dev server
import express from 'express';
import path from 'path';
// object top open a browser
import open from 'open';
//define a port
const port = 3000;
// create an express application
const app = express();
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
