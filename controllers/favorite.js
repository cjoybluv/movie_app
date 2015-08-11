var db = require("../models");
var express = require("express");
var router = express.Router();
var request = require('request');
var bodyParser = require('body-parser');


// at site.com/favorites
router.get("/", function(req, res){
    res.render("favorites/index.ejs");
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

})

module.exports = router;