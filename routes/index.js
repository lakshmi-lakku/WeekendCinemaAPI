var CinemaContentHandler = require('./CinemaContentHandler');

var EventContentHandler = require('./EventContentHandler');

module.exports = exports = function(app,db) {

var cinemaContentHandler = new CinemaContentHandler(db);

var eventContentHandler = new EventContentHandler(db);


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

 app.get("/v1/cinema/:name", cinemaContentHandler.getCinema);

 app.get("/v1/events/:date",eventContentHandler.getEventsByDate);
 
 app.get("/v1/events/",eventContentHandler.getEvents);
}