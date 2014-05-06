$(function() {

	$(".event-description").trunk8({
		lines: 7
	});

	$(".community-description").trunk8({
		lines: 6
	});

	$('.event-image').imageScale();

	$('.community-image').imageScale();

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
