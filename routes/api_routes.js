module.exports = function(app) {
  // GET route for getting all of the todos
  app.get("/api/posts", function(req, res) {
    // Write code here to retrieve all of the todos from the database and res.json them
    // back to the user
    db.Todo.findAll({}).then(function(dbmonarch) {
      return res.json(dbmonarch);
    });
  });
};
