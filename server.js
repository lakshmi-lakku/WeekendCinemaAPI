var express = require('express')
  , app = express() // Web framework to handle routing requests
  , MongoClient = require('mongodb').MongoClient // Driver for connecting to MongoDB
  , routes = require(__dirname+'/routes') // Routes for our application
  , config = require(__dirname+'/config.json');// for loading configuration file
  
  // set the port of our application
  // process.env.PORT lets the port be set by Heroku
  var port = process.env.PORT || 8080;
	
	MongoClient.connect('mongodb://weekendcinema:wc@ds059672.mongolab.com:59672/weekendcinema', function(err, db) {
    "use strict";
    if(err) throw err;
	
	// Application routes
    routes(app,db);

    app.listen(port);
    console.log('Weekend Cinema REST API Server listening on port '+port);
	
});
