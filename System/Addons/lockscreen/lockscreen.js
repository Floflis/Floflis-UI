function unlock() {
document.getElementById("body").className = "unlocked";
}
function lock() {
document.getElementById("body").className = "locked";
}
var div = document.getElementById('body');
div.innerHTML = div.innerHTML + '<div id="lockscreen" style="background:url(System/Resources/Themes/Default/Backgrounds/Lockscreen/Default.png) no-repeat center center fixed;    background-size:cover" onclick="secondboot()"></div>';