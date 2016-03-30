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
    $(".tile").addClass("animated pulse");
    setTimeout(function(){
      $(".tile").removeClass('pulse');
    }, 900); 
  }
});

$(".tile").mouseenter(function() {
	$(this).addClass("pulse");	
});

$(".tile").mouseleave(function() {
	$(this).removeClass("pulse");	
});

});

