$(document).ready(function() {

	$("#nav-toggle").click(function(event){
		event.preventDefault();
		var currentXPos = $("#nav-bar").css('top');
		var wholeNavBarHeight = $("#top-bar-whole").css('height');

		if(currentXPos == '0px') {
			$("#nav-bar").css('top', '-45px');
			$("#top-bar-whole").css('height', '46px');
		} else {
			$("#nav-bar").css('top', '0px');
			$("#top-bar-whole").css('height', '91px');
		}
	});
});