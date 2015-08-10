var express = require('express');
var app = express();
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var request = require('request');
require('express-helpers')(app);

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(ejsLayouts);
// app.use(app.router)

app.use(express.static('assets'));


app.get("/", function(req, res){
    res.render("index.ejs");
});

app.get("/results", function(req, res){
    // res.send(req.query)
    var title = req.query.t;
    var url = "http://www.omdbapi.com/?s=" + title;
    request(url, function(errors, response, data){
        var x = JSON.parse(data); //{Search: [{}, {},}
        var results = x.Search;
        res.render("results.ejs", {results: results});
    });
});

app.get("/movies/:id", function(req, res){
    var id = req.params.id;
    var url = "http://www.omdbapi.com/?i=" + id + "&plot=short&tomatoes=true&r=json";
    request(url, function(errors, response, data){
        var x = JSON.parse(data); //{Search => [{}, {},} x.Response = "True"
        res.render("show.ejs", {movie: x});
        // res.send(x)
    });
});


app.listen(3000);
