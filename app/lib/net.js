
exports.getMovies = function(_callback) {
	var xhr = Ti.Network.createHTTPClient();
	var url = "http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?page_limit=16&page=1&country=us&apikey=ecjw44d66pv3neqnby5nbku4";
	xhr.onload = function() {
		var data = JSON.parse(xhr.responseText);
		_callback(data.movies);
	};
	xhr.onerror = function() {
		alert("oh oh! no movies returned from server");
	};
	xhr.open("GET", url);
	xhr.send();
};
