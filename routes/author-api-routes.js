
var db = require("../models");

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

app.get("", function(req, res){
  db.authors.findAll({
    where: {
      category: req.params.category
    }
  })
    .then(function(dbmonarch) {
      res.json(dbmonarch);
    });
  });

    app.delete("", function(req, res) {
      db.authors.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(function(dbmonarch) {
          res.json(dbmonarch);
        });
    });
  
    app.put("", function(req, res) {
      db.authors.update(req.body,
        {
          where: {
            id: req.body.id
          }
        })
        .then(function(dbmonarch) {
          res.json(dbmonarch);
        });
    });
  
  app.post("", function(req, res) {
    console.log(req.body);
    db.authors.create({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
    })
      .then(function(dbmonarch) {
        res.json(dbmonarch);
      });
  });