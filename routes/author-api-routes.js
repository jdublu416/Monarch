var express = require('express');
var app = express();
var db = require("../models");

module.exports = function(app) {

  app.get('/authors', function(req, res) {

    db.authors.findAll({
      include: [{all: true}],

    }).then(function(author) {

      res.render("index", {author: author});
    });
  });
// yeet

  app.get("/api/authors/:id", function(req, res) {
    db.authors.findAll({}).then(function(dbmonarch) {
      return res.json(dbmonarch);
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

  app.put("", function(req, res) {
    db.authors.update(req.body,
      {

        userName: req.body.title,
        password: req.body.body,
      })
      .then(function(dbauthors) {
        res.json(dbauthors);
      });
  });
};

app.get("/api/authors/:id", function(req, res){
  db.authors.findAll({
    where: {
      category: req.params.auth_id
    }
  })
    .then(function(dbmonarch) {
      res.json(dbmonarch);
    });
  });

    app.delete("/api/authors/:id", function(req, res) {
      db.authors.destroy({
        where: {
          id: req.params.auth_id
        }
      })
        .then(function(dbmonarch) {
          res.json(dbmonarch);
        });
    });
  
    app.put("/api/authors/:id", function(req, res) {
      db.authors.update(req.body,
        {
          where: {
            id: req.params.auth_id
          }
        })
        .then(function(dbmonarch) {
          res.json(dbmonarch);
        });
    });
  
  app.post("/api/authors/:id", function(req, res) {
    console.log(req.body);
    db.authors.create({
// DO NOT DELETE THE COMMENT BELOW
      // Yote is the past tense verb of yeet. Change my mind.
      auth_FN: req.body.auth_FN,
      auth_LN: req.body.auth_LN,
      auth_user_name: req.body.auth_user_name,
      auth_email: req.body.auth_email,
      auth_password: req.body.auth_password
    })
      .then(function(dbmonarch) {
        res.json(dbmonarch);
      });
  });