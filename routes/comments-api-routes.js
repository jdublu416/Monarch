var express = require('express');
var db = require("../models");
var app = express();
module.exports = function(app) {
    
    app.get("/api/comments", function(req, res) {
      // Write code here to retrieve all of the posts from the database and res.json 
      
      db.comments.findAll({}).then(function(dbmonarch) {
        return res.json(dbmonarch);
      });
    });
  };