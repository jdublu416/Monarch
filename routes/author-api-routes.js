module.exports = function(app) {
  app.get("/api/authors", function(req, res) {
    db.authors.findAll({}).then(function(dbmonarch) {
      return res.json(dbmonarch);
    });
  });
  app.delete("", function(req, res) {
    db.authors.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbauthors) {
        res.json(dbauthors);
      });
  });

  app.put("", function(req, res) {
    db.authors.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbauthors) {
        res.json(dbauthors);
      });
  });
};
