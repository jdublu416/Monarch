module.exports = function(app) {
  app.get("/api/authors", function(req, res) {
    db.authors.findAll({}).then(function(dbmonarch) {
      return res.json(dbmonarch);
    });
  });
};
