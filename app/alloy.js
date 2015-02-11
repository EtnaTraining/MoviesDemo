Alloy.Models.currentMovie = new Backbone.Model();
Alloy.Collections.movieList = new Backbone.Collection();
Alloy.Collections.cast = new Backbone.Collection();

Alloy.Globals.setColor = function(score) {
    return "rgb(" + Math.round(255 - (score / 100) * 255) + "," + Math.round((score / 100) * 255) + ",0)";
};
Alloy.Globals.loading = Alloy.createWidget("nl.fokkezb.loading");

var net = require('net');



net.getMovies(function(movies) {
    Alloy.Globals.loading.hide();
    Alloy.Collections.movieList.reset(movies);
});