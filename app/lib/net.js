
exports.getMovies = function(_callback) {
	var xhr = Ti.Network.createHTTPClient();
	var url = "http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?page_limit=50&page=1&country=us&apikey=" + Alloy.CFG.apikey;
	xhr.onload = function() {
		var data = JSON.parse(xhr.responseText);
		_callback(data.movies);
	};
	xhr.onerror = function(e) {
		Ti.API.info(JSON.stringify(e));
		alert("oh oh! no movies returned from server");
	};
	xhr.open("GET", url);
	xhr.send();
};

