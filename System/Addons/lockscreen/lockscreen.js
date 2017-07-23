function unlock() {
document.getElementById("body").className = "unlocked";
body = document.createElement('audio');
document.getElementById("title").innerHTML = "Screens";
body.innerHTML = '<audio id="sound" src="' + 'System/Addons/lockscreen/snd/System Logon.flac'+ '" autoplay></audio>'
}
function lock() {
document.getElementById("body").className = "locked";
document.getElementById("title").innerHTML = "Lockscreen - Screens";
}