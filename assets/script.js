$(function(){

    var images = [
        "barry_one.jpg",
        "barry2.jpg",
        "blade_runner_two.jpeg",
        "blade_runner.jpg",
        "im_mood.jpg",
        "lost_in_trans_.jpg",
        "lost_in_trans_two.jpg"
    ]

    var random_num = Math.floor(Math.random()* images.length);

    var random_image = images[random_num];

    $(".darken").css("background-image", "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(/images/" + random_image + ")");

});