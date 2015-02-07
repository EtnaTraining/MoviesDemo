// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

Alloy.Models.currentMovie = new Backbone.Model();
Alloy.Collections.movieList = new Backbone.Collection();
Alloy.Collections.cast = new Backbone.Collection();

Alloy.Globals.setColor = function(score) {
	return "rgb(" + Math.round(255 - (score / 100) * 255) + "," + Math.round((score / 100) * 255) + ",0)";
};

var net = require('net');

net.getMovies(function(movies) {
	Alloy.Collections.movieList.reset(movies);
});

