
var db = require("../models");

module.exports = function(app) {

  app.get("/comments", function(req, res) {

    db.comments.findAll({}).then(function(comment) {

      res.render("index", {comment: comment});
    });
  });

    // get for all posts
    app.get("/api/comments", function(req, res) {
      //GET to retrieve all of the comments  
      db.Comments.findAll({}).then(function(dbcomments) {
        return res.json(dbcomments);
      });
    });
//GET  for specific single comment
    app.get("/api/comments/:id", function(req,res){
      db.Comments.findAll({
        where:{
          id: req.params.id
        }
      }).then(function(dbcomments){
        res.json(dbcomments);

      });
    });
// GET all comments for  a specific post
    app.get("/api/comments/:postId", function(req,res){
      db.Comments.findAll({
        where:{
          postId: req.params.postId
        }
      });
    });
// create a new comment to a specific post
    app.post("/api/posts/:postId", function(req, res){
      db.Comments.create({
        postsId: req.params.postsId,
        comm_body: req.params.comm_body,
        

      }).then(function(dbcomments){
        res.json(dbcomments);

      });
    });
//update for an existing post
    app.put("/api/posts/:id", function(req,res){
      db.Comments.update(req.body,{
        where: {
          id: req.body.id
        }

      }).then(function(dbcomments){
        res.json(dbcomments);

     
      });
    });
//delete a comment
    app.delete("/api/posts/:id",function(req,res){
      db.Comments.destroy({
        where: {
          id: req.params.id
        }

      }).then(function(dbcomments){
        res.json(dbcomments);

      });
    });

  };