function unlock() {
document.getElementById("body").className = "unlocked";
}
function lock() {
document.getElementById("body").className = "locked";
}
var div = document.getElementById('body');
div.innerHTML = div.innerHTML + '<div id="lockscreen" style="background:url(System/Resources/Themes/Default/Backgrounds/Lockscreen/Default.svg#default) no-repeat center center fixed" onclick="secondboot()"></div>';