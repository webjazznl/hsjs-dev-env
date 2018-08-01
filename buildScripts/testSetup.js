// This file is not transpiled so must use CommonJS and ES5

//Register babel for transpiling before testing
require('babel-register')();

//Disable webpack features that Mocha does not understand
require.extensions['.css'] = function () {};
