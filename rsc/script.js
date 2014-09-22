function whiteline() {
	document.getElementById('handle-line').style.background='#fff';
}
function destroywhite() {
	document.getElementById('handle-line').style.background='rgba(255, 255, 255, 0.5)';
}

$(document).ready(function(){
	/*---------------------------------
		Tabs system from 99Lime.com HTML KickStart by Joshua Gatcke
	-----------------------------------*/
	// tab setup
	$('.tab-content').addClass('clearfix').not(':first').hide();
	$('ul.tabs').each(function(){
		var current = $(this).find('li.current');
		if(current.length < 1) { $(this).find('li:first').addClass('current'); }
		current = $(this).find('li.current a').attr('href');
		$(current).show();
	});

	// tab click
	$(document).on('click', 'ul.tabs a[href^="#"]', function(e){
		e.preventDefault();
		var tabs = $(this).parents('ul.tabs').find('li');
		var tab_next = $(this).attr('href');
		var tab_current = tabs.filter('.current').find('a').attr('href');
		$(tab_current).hide();
		tabs.removeClass('current');
		$(this).parent().addClass('current');
		$(tab_next).show();
		history.pushState( null, null, window.location.search + $(this).attr('href') );
		return false;
	});

 	// tab hashtag identification and auto-focus
  	var wantedTag = window.location.hash;
	if (wantedTag != "") {
	// This code can and does fail, hard, killing the entire app.
	// Esp. when used with the jQuery.Address project.
		try {
			var allTabs = $("ul.tabs a[href^=" + wantedTag + "]").parents('ul.tabs').find('li');
			var defaultTab = allTabs.filter('.current').find('a').attr('href');
			$(defaultTab).hide();
			allTabs.removeClass('current');
			$("ul.tabs a[href^=" + wantedTag + "]").parent().addClass('current');
			$("#" + wantedTag.replace('#','')).show();
		}
		catch(e) {
			// I have no idea what to do here, so I'm leaving this for the maintainer.
		}
	}
});

var canvas = document.getElementById('live');
var ctx    = canvas.getContext('2d');

var data   = '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">' +
               '<foreignObject width="100%" height="100%">' +
                 '<div xmlns="http://www.w3.org/1999/xhtml" style="font-size:40px">' +
                   '<em>I</em> like <span style="color:white; text-shadow:0 0 2px blue;">cheese</span>' +
                 '</div>' +
               '</foreignObject>' +
             '</svg>';

var DOMURL = window.URL || window.webkitURL || window;

var img = new Image();
var svg = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
var url = DOMURL.createObjectURL(svg);

img.onload = function () {
  ctx.drawImage(img, 0, 0);
  DOMURL.revokeObjectURL(url);
}

img.src = url;