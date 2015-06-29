var ContentHandler = require('./content');

module.exports = exports = function(app,db) {

var contentHandler = new ContentHandler(db);


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

 app.get("/getData/cinema/:name", contentHandler.getCinema);

}