

if (OS_IOS) {
    var navWin = Ti.UI.iOS.createNavigationWindow({
        window: $.index
    });
    navWin.open();
    $.list.filterAttribute = "name";
} else {
    $.index.open();
    $.list.filterAttribute = "title";
}


var net = require('net');
$.loading.show();
net.getMovies(function(movies) {
    $.loading.hide();
    Alloy.Collections.movieList.reset(movies);
});




function showDetail(e) {
    var detailWin = Alloy.createController("detail", e.index).getView();
    if (OS_IOS) {
        navWin.openWindow(detailWin);
    } else {
        detailWin.open();
    }
}

function transformModel(model) {
    var attrs = model.attributes;
    attrs.score = attrs.ratings.critics_score;
    attrs.thumbnail = attrs.posters.thumbnail.replace("_tmb", "_pro");
    return attrs;
}



/*
setTimeout(function() {
	showDetail({index: 0});
}, 500); */