var MovieDAO = require('../db/movie').MovieDAO


/* The ContentHandler */
module.exports = ContentHandler;

function ContentHandler (db) {
    "use strict";
	
	var movie = new MovieDAO(db);
	
	this.getMovie = function(req,res,next){
	
	  var name = req.params.name;
	  movie.getMovie(name,function(err,details){	    
		if ( err ) throw next(err);
		res.json( details );
	  });
	  
	}
}


