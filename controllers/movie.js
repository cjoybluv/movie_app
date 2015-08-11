// var db = require("../models");
var express = require("express");
var router = express.Router();
var request = require('request');



router.get("/", function(req, res){
    res.render("movies/index.ejs");
});

router.get("/results", function(req, res){
    // res.send(req.query)
    var title = req.query.t;
    var url = "http://www.omdbapi.com/?s=" + title;
    request(url, function(errors, response, data){
        var x = JSON.parse(data); //{Search: [{}, {},}
        var results = x.Search;
        res.render("movies/results.ejs", {results: results});
    });
});

router.get("/movies/:id", function(req, res){
    var id = req.params.id;
    var url = "http://www.omdbapi.com/?i=" + id + "&plot=short&tomatoes=true&r=json";
    request(url, function(errors, response, data){
        var x = JSON.parse(data); //{Search => [{}, {},} x.Response = "True"
        res.render("movies/show.ejs", {movie: x, id: id});
        // res.send(x)
    });
});


module.exports = router;