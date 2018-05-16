
var db = require("../models");


module.exports = function(app) {
  app.get("/subjects", function(req, res) {

    db.subject.findAll({}).then(function(subject) {

      res.render("index", {subject: subject});
    });
  });

    // GET route for getting all of the todos
    app.get("/api/subjects", function(req, res) {
      // Write code here to retrieve all of the posts from the database and res.json them
      // back to the user
      
      db.subject.findAll({}).then(function(subject) {

        res.json(subject);
      });
    });
  };
