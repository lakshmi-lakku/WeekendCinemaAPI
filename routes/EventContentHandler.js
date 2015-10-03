var EventDAO = require('../db/dao/event').EventDAO

/* The EventContentHandler */
module.exports = EventContentHandler;

function EventContentHandler (db) {
    "use strict";
	var event = new EventDAO(db);
	
    this.getEventsByDate = function(req,res,next){
		
		var date = req.params.date;
		
		event.getEventsByDate(date,function(err,data){
		 if ( err ) 
			 throw next(err);
		 res.json( data );
		});
		
	}
}


