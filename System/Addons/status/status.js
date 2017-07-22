(function() {
var div = document.getElementById('body');
div.innerHTML = div.innerHTML + '<div class="tophotspot"></div>';

div = document.getElementById('body');
div.innerHTML = div.innerHTML + '<div id="statusbar"></div>';
document.getElementById("boot-status").innerHTML = 'Addon: Status - Clock';

div = document.getElementById('statusbar');
div.innerHTML = div.innerHTML + '<span id="clock"></span> <span class="abtndata" id="weekday"></span>';
})();

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var span = document.getElementById('clock');
    span.innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

document.getElementById("boot-status").innerHTML = 'Addon: Status - System Background Icons';
div = document.getElementById('statusbar');
div.innerHTML = div.innerHTML + '<div id="system-apps"><li class="minipic" title="[Example] User"><img src="Users/User/Data/pic-default.svg" alt="User" height="39" width="52" onclick="$(`#usermenu`).toggle();return false" /></li></div>';
document.getElementById("boot-status").innerHTML = 'Addon: Status - Background Apps';
div = document.getElementById('statusbar');
div.innerHTML = div.innerHTML + '<div class="working-apps"><div class="topbar-notifications" title="Control Center" onclick="$(`#controlcenter`).toggle();return false"><i class="material-icons">keyboard_arrow_down</i></div><icon class="mini unavail" title="[Example] 4 app updates available" onclick="showDialog(`dialog`)"><img width="18" height="18" src="System/Apps/Store.js/icon.svg#icon" onclick="showDialog(`dialog`)"></icon><icon class="mini unavail" title="[Example] Browser - Updating app" onclick="showDialog(`dialog`)"><img width="18" height="18" src="System/Apps/com.plasmmer.browser/icon.svg#icon"></icon><icon class="mini unavail" title="[Example] Playing Halo - Beyoncé" onclick="showDialog(`dialog`)"><img width="18" height="18" src="System/Apps/Music/icon.svg#icon"></icon><icon class="mini unavail" title="[Example] Uploading photo" onclick="showDialog(`dialog`)"><img width="18" height="18" src="System/Apps/Camera/icon.svg#icon"></icon><icon class="mini unavail" title="[Example] Running in background" onclick="showDialog(`dialog`)"><img width="18" height="18" src="System/Apps/Messenger/icon.svg#icon"></icon><icon class="mini" title="Sound: Muted" onclick="$(`#soundmenu`).toggle();return false"><i class="material-icons">volume_mute</i></icon><icon class="mini" title="No Internet access" onclick="showDialog(`dialog`)"><i class="material-icons">network_wifi</i></icon></div>';
document.getElementById("boot-status").innerHTML = 'Addon Status - Control Center';
div = document.getElementById('body');
div.innerHTML = div.innerHTML + '<div class="navmenu right" id="soundmenu"><center><h4>Sound</h4><h6>50%</h6><input type="range" orient="vertical"></center></div><div id="controlcenter" style="display: none;"><center><h1>Control Center</h1></center><ul class="tabs center"><li class="first unavail current"><a href="#tabcc1"><i class="material-icons">apps</i> + Background apps</a></li><li class=""><a href="#tabcc2"><i class="material-icons">view_list</i> Notifications</a></li><li class="last"><a href="#tabcc3"><i class="material-icons">settings_applications</i> Actions</a></li></ul><tab id="tabcc1" class="tab-content clearfix" style="display: block;"><p>No more background apps are running.</p></tab><tab id="tabcc2" class="tab-content clearfix" style="display: none;"><p>No notifications.</p></tab><tab id="tabcc3" class="tab-content clearfix" style="display: none;"><div class="notifycenterbtn userpic unavail" title="[Example] User"><img src="Users/User/Data/pic-default.svg" alt="User" height="39" width="52" onclick="$(`#usermenu`).toggle();$(`#controlcenter`).toggle();return false"></div><div class="notifycenterbtn unavail" title="[Example] User"><i class="material-icons">bluetooth_disabled</i><span>Bluetooth</span></div><div class="notifycenterbtn unavail" title="[Example] User"><i class="material-icons">brightness_auto</i><span>Brightness</span></div><div class="notifycenterbtn unavail" title="[Example] User"><i class="material-icons">flight</i><span>Airplane mode</span></div><div class="notifycenterbtn unavail" title="[Example] User"><i class="material-icons">gps_off</i><span>GPS</span></div><div class="notifycenterbtn unavail" title="[Example] User"><i class="material-icons">highlight</i><span>Flashlight</span></div><div class="notifycenterbtn unavail" title="[Example] User"><i class="material-icons">fiber_new</i><span>Night mode</span></div><div class="notifycenterbtn unavail" title="[Example] User"><i class="material-icons">alarm_off</i><span>Alarm</span></div><div class="notifycenterbtn unavail" title="[Example] User"><i class="material-icons">wifi</i><span>WiFi</span></div></tab></div><nav class="navmenu right" id="usermenu" style="display: none;"><center><h1>User</h1></center><ul class="tabs center"><div onclick="$(`#usermenu`).toggle();return false">←</div><li class="first unavail current"><a href="#tabu1"><i class="fa fa-power-off" aria-hidden="true"></i> Power</a></li><li class="last"><a href="#tabu2"><i class="fa fa-user" aria-hidden="true"></i> Me</a></li></ul><tab id="tabu1" class="tab-content clearfix" style="display: block;"><ul><a onclick="lock();$(`#usermenu`).toggle();return false"><li draggable="true" class="navi-item"><div><i class="material-icons">lock</i></div><p>Lock</p></li></a><a onclick="restart()"><li draggable="true" class="navi-item"><div><i class="material-icons">restore_page</i></div><p>Restart</p></li></a><a onclick="showDialog(`dialog`)"><li draggable="true" class="navi-item unavail"><div><img src="img/Navmenu/action.svg#black" class="navi-img"></div><p>Action</p></li></a><a onclick="showDialog(`dialog`)"><li draggable="true" class="navi-item unavail"><div><img src="img/Navmenu/shortcut.svg#black" class="navi-img"></div><p>Shortcut</p></li></a><a><li draggable="true" class="navi-item unavail"><div><img src="img/Navmenu/groups.svg#black" class="navi-img"></div><p>Group</p></li></a></ul></tab><tab id="tabu2" class="tab-content clearfix" style="display: none;"><ul><a onclick="showDialog(`dialog`)"><li draggable="true" class="navi-item unavail"><div><img src="img/Navmenu/background.svg#black" class="navi-img"></div><p>Wallpaper</p></li></a><a onclick="showDialog(`dialog`)"><li draggable="true" class="navi-item unavail"><div><img src="img/Navmenu/launcher.svg#black" class="navi-img"></div><p>Launcher</p></li></a><a onclick="showDialog(`dialog`)"><li draggable="true" class="navi-item unavail"><div><img src="img/Navmenu/themes.svg#black" class="navi-img"></div><p>Themes</p></li></a></ul></tab></nav>';
