$(document).ready(function() {
    $(".button-collapse").sideNav();
    $('.parallax').parallax();
    $('.slider').slider({full_width: true});
    $('.collapsible').collapsible();


    //Logout button
    $('#logout').on("click", function(){
        location.href = "../php/logout.php";
    });
});

/**
 * Created by Alexander on 17-Nov-16.
 * This script will have to be loaded to every page to init special functionality for the website.
 */
