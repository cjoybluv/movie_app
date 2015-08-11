var db = require("../models");
var express = require("express");
var router = express.Router();
var request = require('request');
var bodyParser = require('body-parser');


// at site.com/favorites
router.get("/", function(req, res){
    db.favorite.findAll().then(function(favList){
      res.render("favorites/index.ejs", {favList: favList});
    });
});

router.post("/", function(req, res){
    // res.send(req.body);
    db.favorite.create({
        title: req.body.title,
        year: req.body.year,
        poster: req.body.poster,
        imdbId: req.body.id
    }).then(function(favorite){
        res.redirect("movies/" + req.body.id)
    });
});

router.get("/:id/comments", function(req, res){
    var id = req.params.id;
    db.favorite.find({where: {imdbId: req.params.id}}).then(function(movie){
        movie.getComments().then(function(commentsArray){
            res.render("favorites/comments.ejs", {comments: commentsArray,
                                                   imdbId: id});
        });
    });
});

router.post("/:id/comments", function(req, res){
    var backURL=req.header('Referer') || '/';
    db.favorite.find({where: {imdbId: req.body.id}}).then(function(movie){
        movie.createComment({body: req.body.content}).then(function(comment) {
            res.redirect(backURL);
        });
    });
});

module.exports = router;