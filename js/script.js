$(function() {

	$(".location").prepend('<img class="location-icon" src="assets/location.svg">');

	$(".event-description").trunk8({
		lines: 4
	});

	$(".community-description").trunk8({
		lines: 6
	});

	$(".event-title").trunk8({
		lines: 1
	});

	$('.event-image').imageScale({
		parent_css_selector: null, // Defaults to the image's immediate parent.
	    fade_duration: 0, // Fading is disabled if set to 0.
	    rescale_after_resize: true
    });

	$('#confirm-event-image').imageScale();

	$('.community-image').imageScale();

	$( "#datepicker" ).datepicker();

	$('.timepicker').timepicker();

	$(".tile-activity img").each(function(){
		var thisWidth = $(this).width();
		var thisHeight = $(this).height();

		if(thisWidth > thisHeight) {
		    $(this).css("width", "auto");
		    $(this).css("height", "100%");
		} else if(thisHeight > thisWidth) {
		     $(this).css("width", "100%");
		     $(this).css("height", "auto");
		}

	});


	$("#nav-toggle").click(function(event){
		event.preventDefault();
		var currentXPos = $("#nav-bar").css('top');
		var wholeNavBarHeight = $("#top-bar-whole").css('height');

		if(currentXPos == '-10px') {
			$("#nav-bar").css('top', '-55px');
			$("#top-bar-whole").css('height', '46px');
			$("#wrap").css('top', '-35px');
		} else {
			$("#nav-bar").css('top', '-10px');
			$("#top-bar-whole").css('height', wholeNavBarHeight);
			$("#wrap").css('top', '10px');
		}
	});

	$("#register-button").click(function(event){
		event.preventDefault();

		var current_text = $(this).text();
		console.log(current_text);
		if(current_text == "Registered") {
			$(this).text("Register for Event");
		} else {
			//$('#register-confirm').css('left', '100px');
			$(this).text("Registered");
		}
	});

});
