function unlock() {
document.getElementById("body").className = "unlocked";
body = document.createElement('audio');
document.getElementById("title").innerHTML = "WS.js";
body.innerHTML = '<audio id="sound" src="' + 'System/Addons/lockscreen/snd/System Logon.flac'+ '" autoplay></audio>'
}
function lock() {
document.getElementById("body").className = "locked";
document.getElementById("title").innerHTML = "Lockscreen - WS.js";
}
var div = document.getElementById('body');
div.innerHTML = div.innerHTML + '<div id="lockscreen" style="background:url(System/Resources/Themes/Default/Backgrounds/Lockscreen/Default.png) no-repeat center center fixed;    background-size:cover" onclick="secondboot()"></div>';