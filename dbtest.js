var db = require("./models");

// db.favorite.create({
//     title: "test",
//     year: 4444
// });

// db.favorite.findAll().then(function(favList){
//     favList.forEach(function(fav){
//         console.log(fav.title);
//     });
// });

db.favorite.find({where: {imdbId: "tt0083658"}}).then(function(movie){
    movie.createComment({body: "This movie rules!"}).then(function(comment) {
        console.log(comment.get());
    });
})


