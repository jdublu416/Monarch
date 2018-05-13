module.exports = function(app) {
    // GET route for getting all of the todos
    app.get("/api/subject", function(req, res) {
      // Write code here to retrieve all of the posts from the database and res.json them
      // back to the user
      db.subject.findAll({}).then(function(dbmonarch) {
        return res.json(dbmonarch);
      });
    });
  };