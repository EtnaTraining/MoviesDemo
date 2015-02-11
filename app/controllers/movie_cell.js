

var score = $model.get("ratings").critics_score;
$.score.color = Alloy.Globals.setColor(score);
$.score.text += "%";

if (OS_IOS) {
	$.movie_cell.name = $.title.text;
} else {
	$.movie_cell.title = $.title.text;
}
