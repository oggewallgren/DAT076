/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 *
 * 
 */

var movies = [
    {title: "Endgame", cover: "./images/enggame.jpg"},
    {title: "Spiderman", cover: ""},
    {title: "Iron Man", cover: ""},
];

$(document).ready(function () {
    $("div.clickable").click(function () {
        $("#navWatchList").popover("show");
        setTimeout( function() {
            $("#navWatchList").popover("hide");
        }, 2000 );
        
        
        // console.log("hej");
    });
});

