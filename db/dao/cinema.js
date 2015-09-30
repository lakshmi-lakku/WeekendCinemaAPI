/* The CinemaDAO must be constructed with a connected database object */
function CinemaDAO(db) {
    "use strict";

    /* If this constructor is called without the "new" operator, "this" points
     * to the global object. Log a warning and call it correctly. */
    if (false === (this instanceof CinemaDAO)) {
        console.log('Warning: CinemaDAO constructor called without "new" operator');
        return new CinemaDAO(db);
    }

    var cinema = db.collection("cinema");
	
	this.getCinema = function( name, callback) {
        "use strict";
	
		var query = { 'name': name };
        cinema.findOne(query,function(err, cinemaDetails) {
            "use strict";	
            if (err) 
			   return callback(err, '{}');
            callback(err, cinemaDetails);
        });
    }

}

module.exports.CinemaDAO = CinemaDAO;
