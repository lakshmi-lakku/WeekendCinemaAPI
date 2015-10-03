var CinemaDAO = require('../db/dao/cinema').CinemaDAO

/* The CinemaContentHandler */
module.exports = CinemaContentHandler;

function CinemaContentHandler (db) {
    "use strict";
	var cinema = new CinemaDAO(db);
	this.getCinema = function(req,res,next){
	     var name = req.params.name;
	     cinema.getCinema(name,function(err,details){	    
		 if ( err ) 
			 throw next(err);
		 res.json( details );
	  });
	}
}


