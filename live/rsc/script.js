function unlock() {
document.getElementById("body").className = "unlocked";
}
function lock() {
document.getElementById("body").className = "locked";
}

var isNode = false;    
if (typeof process === 'object') {
  if (typeof process.versions === 'object') {
    if (typeof process.versions.node !== 'undefined') {
      isNode = true;
      
    }
  }
}

if(typeof isNode != 'undefined' && isNode == true){document.getElementsByTagName("btnFullscreen")[0].setAttribute("class", "display:none");}

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