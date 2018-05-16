var express = require('express');
var db = require("../models");
var app = express();
var subject = db.subject;
module.exports = function(app) {
    // GET route for getting all of the todos
    app.get("/", function(req, res) {
      // Write code here to retrieve all of the posts from the database and res.json them
      // back to the user
      
      subject.findAll({}).then(function(subject) {

        res.render("index", subject);
      });
    });
  };
