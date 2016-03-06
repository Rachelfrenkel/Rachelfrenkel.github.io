$(function() {

'use strict';

//slow scroll to cards grid
$("#scroll-caret-btn").click(function() {
    $('html, body').animate({
        scrollTop: $('.grid').offset().top
    }, 'slow');
});

//use waypoint to tell when a div comes into view
var waypoint = new Waypoint({
  element: $('.grid'),
  handler: function() {
    console.log("animating grid");
    $('.tile').addClass("animated pulse");
  }
})


});

