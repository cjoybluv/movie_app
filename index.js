var express = require('express');
var app = express();
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
require('express-helpers')(app);

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(ejsLayouts);
app.use(express.static('assets'));

app.use("/", require("./controllers/movie.js"));
app.use("/favorites", require("./controllers/favorite.js"));



app.listen(3000);
