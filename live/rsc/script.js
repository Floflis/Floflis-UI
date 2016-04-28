var isNode = false;    
if (typeof process === 'object') {
  if (typeof process.versions === 'object') {
    if (typeof process.versions.node !== 'undefined') {
      isNode = true;
      
    }
  }
}

if(typeof isNode != 'undefined' && isNode == true){document.getElementsByTagName("btnFullscreen")[0].setAttribute("class", "display:none");}

function whiteline() {
document.getElementById("handle-line").style.background="#fff"
}

function destroywhite() {
document.getElementById("handle-line").style.background="rgba(255, 255, 255, 0.5)"
}