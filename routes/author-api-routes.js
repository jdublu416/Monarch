
var db = require("../models");

module.exports = function(app) {

  app.get('/authors', function(req, res) {

    db.authors.findAll({
      include: [{all: true}],

    }).then(function(author) {

      res.render("index", {author: author});
    });
  });

  app.get("/api/authors", function(req, res) {
    db.authors.findAll({}).then(function(dbMonAuth) {
      return res.json(dbMonAuth);
    });
  });
  
  app.delete("/api/authors/:id", function(req, res) {
    db.authors.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbMonAuth) {
        res.json(dbMonAuth);
      });
  });


  app.post("/api/authors", function(req, res) {
    db.authors.create(req.body,
      {

        userName: req.body.title,
        password: req.body.body,
      })
      .then(function(dbMonAuth) {
        res.json(dbMonAuth);
      });
  });
};

app.get("/api/authors", function(req, res){
  db.authors.findAll({
    where: {
      category: req.params.category
    }
  })
    .then(function(dbMonAuth) {
      res.json(dbMonAuth);
    });
  });

    app.delete("/api/authors", function(req, res) {
      db.authors.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(function(dbMonAuth) {
          res.json(dbMonAuth);
        });
    });
  
    app.put("/api/authors", function(req, res) {
      db.authors.update(req.body,
        {
          where: {
            id: req.body.id
          }
        })
        .then(function(dbMonAuth) {
          res.json(dbMonAuth);
        });
    });
  
  app.post("/api/authors", function(req, res) {
    console.log(req.body);
    db.authors.create({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
    })
      .then(function(dbMonAuth) {
        res.json(dbMonAuth);
      });
  });