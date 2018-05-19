
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
    app.get("/api/comments/:comm_id", function(req,res){
      db.comments.findAll({
        // where:{
        //   comm_id= req.params.comm_id,
        // }
      }).then(function(dbmonarch){
        res.json(dbmonarch);
      });
    });
// GET all comments for  a specific post
    app.get("/api/comments/:post_id", function(req,res){
      db.comments.findAll({
        where:{
          postId: req.params.postId
        }
      });
    });
// create a new comment to a specific post
    app.post("/api/posts/:post_id", function(req, res){
      db.comments.create({
        post_id: req.params.post_id,
        comm_body: req.params.comm_body,
        

      }).then(function(dbcomments){
        res.json(dbcomments);

      });
    });
//update for an existing post
    app.put("/api/posts/:comm_id", function(req,res){
      db.comments.update(req.body,{
        where: {
          id: req.body.id
        }

      }).then(function(dbcomments){
        res.json(dbcomments);

     
      });
    });
//delete a comment
    app.delete("/api/posts/:comm_id",function(req,res){
      db.comments.destroy({
        where: {
          id: req.params.id
        }

      }).then(function(dbcomments){
        res.json(dbcomments);

      });
    });

  };