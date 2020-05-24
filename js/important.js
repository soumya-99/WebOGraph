$(document).ready(function() {
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.tooltipped').tooltip();
    $('textarea#textarea1').characterCounter();

    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });
});

var scroll = new SmoothScroll('a[href*="#"]');