//use express as dev server
import express from 'express';
import path from 'path';
// object top open a browser
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

//define a port
const port = 3000;
// create an express application
const app = express();
//define action for '/'
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

//start listening on port and open a browser (log error if any)
app.listen(port, function(error){
  if(error) {
    console.log(error);
  } else {
    open('http://localhost:' + port);
  }
});
