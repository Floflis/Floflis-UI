$(document).ready(function () {
$("li.navi-item").hover(function() {
  $(this).find("img").attr("src", $(this).find("img").attr("src").replace("#black", "#white"));
}, function() {
  $(this).find("img").attr("src", $(this).find("img").attr("src").replace("#white", "#black"));
});
});

function toggleFullScreen() {
  document.getElementById("btnFullscreen").className = "notifycenterbtn active";
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
   (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {  
      document.documentElement.requestFullScreen();  
    } else if (document.documentElement.mozRequestFullScreen) {  
      document.documentElement.mozRequestFullScreen();  
    } else if (document.documentElement.webkitRequestFullScreen) {  
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
    }  
  } else {  
    document.getElementById("btnFullscreen").className = "notifycenterbtn";
    if (document.cancelFullScreen) {  
      document.cancelFullScreen();  
    } else if (document.mozCancelFullScreen) {  
      document.mozCancelFullScreen();  
    } else if (document.webkitCancelFullScreen) {  
      document.webkitCancelFullScreen();  
    }  
  }  
}

$(".app-title").each(function () {
    text = $(this).text();
    if (text.length > 12) {
        $(this).html(text.substr(0, 186) + '<span class="elipsis">' + text.substr(186) + '</span><a class="elipsis" href="#">....</a>');
    }
});

function whiteline() {
document.getElementById("handle-line").style.background="#fff"
}

function destroywhite() {
document.getElementById("handle-line").style.background="rgba(255, 255, 255, 0.5)"
}