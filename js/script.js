$(document).ready(function() {

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
			$("#top-bar-whole").css('height', '91px');
			$("#wrap").css('top', '0px');
		}
	});

});


