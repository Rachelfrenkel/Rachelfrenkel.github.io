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
	if (!$(this).hasClass("expanded")) {
		$(this).addClass("pulse");	
	}
});

$(".tile").mouseleave(function() {
	$(this).removeClass("pulse");	
});

$(".tile").click(function() {
	$('.grid-row').toggle();
	$(this).parent().toggle();

	
	if ($(this).hasClass("expanded")) {

		$(this).addClass("fadeOutUp");

		$(this).removeClass("expanded");
		setTimeout(function(){
			$(".tile").show();

			$('.tile-detail').toggle();
			$('.tile-title').toggle();
		    
		    $(".tile").removeClass('fadeOutUp');
	 	 }, 900);

	} else {

		// hide all other tiles
		$(".tile").toggle();
		$(this).toggle();

		$(this).addClass("expanded animated fadeInDown");
		$(this).removeClass("pulse");	

		$('.tile-detail').toggle();
		$('.tile-title').toggle();
	    setTimeout(function(){
	      $(".tile").removeClass('fadeInDown');
	    }, 900); 		

		
	}
});



});

