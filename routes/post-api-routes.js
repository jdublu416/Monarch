

var db = require("../models");



module.exports = function(app) {

  app.get("/posts", function(req, res) {
    db.posts.findAll({}).then(function(post) {
      res.render("index", {post: post});
    });
  });

  //get for getting all posts
  app.get("/api/posts", function(req, res) {
    db.posts.findAll({}).then(function(dbmonarch) {
      return res.json(dbmonarch);
    });
  });

  //get for searching for post by subject
app.get("/api/posts/:subj_id", function(req,res){
  db.Posts.findAll({
    where: {
      subj_id: req.params.subj_id
    } 
  }).then(function(dbmonarch){
    res.json(dbmonarch);
  });
});
 //get for searching for post by author
app.get("/api/posts/:auth_id", function(req,res){
  db.Posts.findAll({
    where: {
      auth_id: req.params.auth_id
    } 
  }).then(function(dbmonarch){
    res.json(dbmonarch);
  });
});
 //get for searching for single post by post_id
app.get("/api/posts/:post_id", function(req,res){
  db.Posts.findAll({
    where: {
      post_id: req.params.post_id
    } 
  }).then(function(dbmonarch){
    res.json(dbmonarch);
  });
});


  // create new post
  app.post("/api/posts", function(req, res){
    console.log(req.body);
    db.Posts.create({
      post_title: req.body.post_title,
      post_body: req.body.post_body,
    }).then(function(dbmonarch){
      res.json(dbmonarch);
    });
  });
//put route for editing posts
  app.put("/api/posts", function(req,res){
    db.Posts.update(req.body,{
      where: {
        post_id: req.body.post_id
      }
    }).then(function(dbPost){
      res.json(dbmonarch);
    });
  });

  app.delete("/api/posts/:id", function(req, res) {
    db.Posts.destroy({
      where: {
        post_id: req.params.post_id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });















};
