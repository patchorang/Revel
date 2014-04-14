$(document).ready(function() {

	var title = params.title;
	var description = params.description;
	var location = params.location;
	var time = params.time;

	if (title) {
		$("#create-event-title").text(title);
	}

});

// From: https://stackoverflow.com/questions/5448545/how-to-retrieve-get-parameters-from-javascript
function getSearchParameters() {
      var prmstr = window.location.search.substr(1);
      return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
}

function transformToAssocArray( prmstr ) {
    var params = {};
    var prmarr = prmstr.split("&");
    for ( var i = 0; i < prmarr.length; i++) {
        var tmparr = prmarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
    }
    return params;
}

var params = getSearchParameters();

