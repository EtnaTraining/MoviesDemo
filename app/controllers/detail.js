
var args = arguments[0];

var movieDetail = Alloy.Collections.movieList.at(args).toJSON();

movieDetail.ascore = movieDetail.ratings.audience_score;

$.cscore.color = Alloy.Globals.setColor(movieDetail.score); 
$.ascore.color = Alloy.Globals.setColor(movieDetail.ascore);



Alloy.Models.currentMovie.set(movieDetail);

Alloy.Collections.cast.reset(movieDetail.abridged_cast);



function closeWindow() {
  $.detail.close();
}

$.detail.addEventListener("close", function() {
	Alloy.Models.currentMovie.clear();
	$.destroy();
});
