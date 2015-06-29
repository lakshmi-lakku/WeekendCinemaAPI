var express = require('express')
  , app = express() // Web framework to handle routing requests
  , MongoClient = require('mongodb').MongoClient // Driver for connecting to MongoDB
  , routes = require(__dirname+'/routes') // Routes for our application
  , config = require(__dirname+'/config.json');// for loading configuration file
	
	MongoClient.connect('mongodb://localhost:27017/WkendMovies', function(err, db) {
    "use strict";
    if(err) throw err;
	
	// Application routes
    routes(app,db);

    app.listen(config.http.port);
    console.log('Weekend Cinema REST API Server listening on port '+config.http.port);
	
});
