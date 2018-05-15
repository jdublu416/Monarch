var express = require('express');
var db = require("../models");
var app = express();
module.exports = function(app) {

  app.get("/subject", function(req, res) {

    db.comments.findAll({}).then(function(comment) {

      res.render("index", {comment: comment});
    });
  });

    // get for all posts
    app.get("/api/comments", function(req, res) {
      //GET to retrieve all of the comments  
      
      db.comments.findAll({}).then(function(dbmonarch) {
        return res.json(dbmonarch);
      });
    });
//GET  for specific single comment
    app.get("/api/comments/:comm_id", function(req,res){
      db.Comments.findAll({
        // where:{
        //   comm_id= req.params.comm_id,
        // }
      }).then(function(dbmonarch){
        res.json(dbmonarch);
      });
    });
// GET all comments for  a specific post
    app.get("/api/comments/:post_id", function(req,res){
      db.Comments.findAll({
        where:{
          post_id: req.params.post_id
        }
      });
    });
// create a new comment to a specific post
    app.post("/api/posts/:post_id", function(req, res){
      db.Comments.create({
        post_id: req.params.post_id,
        comm_body: req.params.comm_body,
      }).then(function(dbmonarch){
        res.json(dbmonarch);
      });
    });
//update for an existing post
    app.put("/api/posts/:comm_id", function(req,res){
      db.Comments.update(req.body,{
        where: {
          comm_id: req.body.comm_id
        }
      }).then(function(dbmonarch){
        res.json(dbmonarch);
      });
    });
//delete a comment
    app.delete("/api/posts/:comm_id",function(req,res){
      db.Comments.destroy({
        where: {
          comm_id: req.params.comm_id
        }
      }).then(function(dbmonarch){
        res.json(dbmonarch);
      });
    });

  };