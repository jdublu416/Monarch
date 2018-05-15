var express = require('express');
var db = require("../models");
var app = express();
module.exports = function(app) {
  // GET route for getting all of the todos
  app.get("/api/posts", function(req, res) {
    // Write code here to retrieve all of the posts from the database and res.json them
    // back to the user
    db.posts.findAll({}).then(function(dbmonarch) {
      return res.json(dbmonarch);
    });
  });
};
