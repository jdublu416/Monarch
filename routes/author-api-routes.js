module.exports = function(app) {
  app.get("/api/authors", function(req, res) {
    db.author.findAll({}).then(function(dbmonarch) {
      return res.json(dbmonarch);
    });
  });
};
