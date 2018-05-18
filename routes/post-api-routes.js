var db = require("../models");

module.exports = function(app) {
  app.get("/posts", function(req, res) {
    db.posts.findAll({}).then(function(post) {
      res.render("index", { post: post });
    });
  });

  //get for getting all posts
  app.get("/api/posts", function(req, res) {

    db.Posts.findAll({}).then(function(dbposts) {
      return res.json(dbposts);

    
    });
  });

  //get for searching for post by subject
app.get("/api/posts/:subjectId", function(req,res){
  db.Posts.findAll({
    where: {
      subjectId: req.params.subjectId
    } 
  }).then(function(dbposts){
     return res.json(dbposts);
  });
});
 //get for searching for post by author
app.get("/api/posts/:authorId", function(req,res){
  db.Posts.findAll({
    where: {
      authorId: req.params.authorId
    } 
  }).then(function(dbposts){
    return res.json(dbposts);
  });
});
 //get for searching for single post by post_id
app.get("/api/posts/:id", function(req,res){
  db.Posts.findAll({
    where: {
      postId: req.params.postId
    } 
  }).then(function(dbposts){
    return res.json(dbposts);
  });

  // create new post
  app.post("/api/posts", function(req, res) {
    console.log(req.body);
    db.Posts.create({
      post_title: req.body.post_title,
      post_body: req.body.post_body,
    }).then(function(dbposts){
      res.json(dbposts);
    });
  });
//put route for editing posts
  app.put("/api/posts", function(req,res){
    db.Posts.update(req.body,{
      where: {

        id: req.body.id

      }
    }).then(function(dbPost){
      res.json(dbposts);
    });
  });

  app.delete("/api/posts/:id", function(req, res) {
    db.posts.destroy({
      where: {

        id: req.params.id

      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
});
}

