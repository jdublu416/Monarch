
var db = require("../models");
var express= require('express');
var app= express();

module.exports = function(app) {

  app.get('/authors', function(req, res) {

    db.authors.findAll({
      include: [{all: true}],

    }).then(function(author) {

      res.render("index", {author: author});
    });
  });

  app.get("/api/authors", function(req, res) {

    db.authors.findAll({}).then(function(dbauthors) {
      return res.json(dbauthors);
    });
  });

  app.delete("/api/authors/:id", function(req, res) {
    db.authors.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbauthors) {
        res.json(dbauthors);
      });
  });


  app.post("/api/authors", function(req, res) {
    db.authors.create(req.body,

      {

        userName: req.body.title,
        password: req.body.body,
      })
      .then(function(dbauthors) {
        res.json(dbauthors);
      });
  });
};

app.get("/api/authors", function(req, res){
  db.authors.findAll({
    where: {
      subject: req.params.subject.id
    }
  })

    .then(function(dbauthors) {
      res.json(dbauthors);
    });
  });

    app.delete("/api/authors/:id", function(req, res) {


      db.authors.destroy({
        where: {
          id: req.params.id
        }
      })

        .then(function(dbauthors) {
          res.json(dbauthors);

       
        });
    });
  
    app.put("/api/authors", function(req, res) {
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
  
  app.post("/api/authors/", function(req, res) {

        

    console.log(req.body);
    db.authors.create({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
    })

      .then(function(dbauthors) {
        res.json(dbauthors);

      });
  });