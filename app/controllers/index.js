function transformModel(model) {
	var attrs = model.attributes;
	attrs.score = attrs.ratings.critics_score;
	attrs.thumbnail = attrs.posters.thumbnail;
	return attrs;
}
if (OS_IOS) {
	var navWin = Ti.UI.iOS.createNavigationWindow({
		window: $.index
	});
	navWin.open();
} else {
	$.index.open();

}

function showDetail(e) {
	var detailWin = Alloy.createController("detail", e.index).getView();
	if (OS_IOS) {
		navWin.openWindow(detailWin);
	} else {
		detailWin.open();
	}
	
	
}

/*
setTimeout(function() {
	showDetail({index: 0});
}, 500); */