//needed npm packages, express, body-parser, path
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// ==============================================================================
// This sets up our express server
var app = express();

// Sets our port
var PORT = process.env.PORT || 3000; 
// BodyParser makes it easy for our server to interpret data sent to it.
// The code below is pulles from Stack Overflow
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// ================================================================================
// Routing for api and html routes javascript files

require('./app/routing/apiroutes.js')(app); 
require('./app/routing/htmlroutes.js')(app);


// ==============================================================================
// Listener--Where the port is

app.listen(PORT, function() {
  console.log("App is running");
});