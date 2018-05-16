var express = require('express');
var app = express();

var db = require("../models");


module.exports = function (app) {

    app.get("/test", function (req, res) {

        return Promise.all([

            db.subject.findAll({}),

            db.authors.findAll({}),

            db.posts.findAll({
                where: {subj_id: db.subject.subj_id}
            }),

        ]).then(([subject, author, posts]) => {

            res.render("index", {
                subject: subject,
                author: author,
                posts: posts
            });
        });
    });

};