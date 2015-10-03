/* The EventDAO must be constructed with a connected database object */
function EventDAO(db) {
    "use strict";

    /* If this constructor is called without the "new" operator, "this" points
     * to the global object. Log a warning and call it correctly. */
    if (false === (this instanceof EventDAO)) {
        console.log('Warning: EventDAO constructor called without "new" operator');
        return new EventDAO(db);
    }

    var event = db.collection("events");
	
	this.getEventsByDate = function( date, callback) {
        "use strict";
	
		var query = {'orgDT':{$gte:new Date(date)}}; 
		
        event.find(query).toArray(function(err, data) {
            "use strict";
         			
            if (err) 
			   return callback(null, '{}');
            callback(err, data);
        });
    }
	
	this.getEvents = function(callback) {
        "use strict";
        event.find().sort({'orgDT':-1}).limit(36).toArray(function(err, data) {
            "use strict";
         			
            if (err) 
			   return callback(null, '{}');
            callback(err, data);
        });
    }

}

module.exports.EventDAO = EventDAO;
