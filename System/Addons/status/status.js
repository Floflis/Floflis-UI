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
div.innerHTML = div.innerHTML + '<div class="working-apps"><div class="topbar-notifications" title="Control Center" onclick="$(`#controlcenter`).toggle();return false"><i class="fa fa-arrow-down" aria-hidden="true"></i></div><icon class="mini unavail" title="[Example] 4 app updates available" onclick="showDialog(`dialog`)"><img width="18" height="18" src="System/Apps/Store.js/icon.svg#icon" onclick="showDialog(`dialog`)"></icon><icon class="mini unavail" title="[Example] Browser - Updating app" onclick="showDialog(`dialog`)"><img width="18" height="18" src="System/Apps/com.plasmmer.browser/icon.svg#icon"></icon><icon class="mini unavail" title="[Example] Playing Halo - Beyoncé" onclick="showDialog(`dialog`)"><img width="18" height="18" src="System/Apps/Music/icon.svg#icon"></icon><icon class="mini unavail" title="[Example] Uploading photo" onclick="showDialog(`dialog`)"><img width="18" height="18" src="System/Apps/Camera/icon.svg#icon"></icon><icon class="mini unavail" title="[Example] Running in background" onclick="showDialog(`dialog`)"><img width="18" height="18" src="System/Apps/Messenger/icon.svg#icon"></icon><icon class="mini" title="Sound: Muted" onclick="showDialog(`dialog`)"><i class="fa fa-volume-up" aria-hidden="true"></i></icon><icon class="mini" title="No Internet access" onclick="showDialog(`dialog`)"><i class="fa fa-signal" aria-hidden="true"></i></icon></div>';
document.getElementById("boot-status").innerHTML = 'Addon Status - Control Center';
div = document.getElementById('body');
div.innerHTML = div.innerHTML + '<div id="controlcenter" style="display: none;"><center><h1>Control Center</h1></center><ul class="tabs center"><li class="first unavail current"><a href="#tabcc1"><i class="fa fa-ellipsis-h" aria-hidden="true"></i> + Background apps</a></li><li class=""><a href="#tabcc2"><div class="tabicon tab-notifications"></div> Notifications</a></li><li class="last"><a href="#tabcc3"><div class="tabicon tab-actions"></div> Actions</a></li></ul><tab id="tabcc1" class="tab-content clearfix" style="display: block;"><p>No more background apps are running.</p></tab><tab id="tabcc2" class="tab-content clearfix" style="display: none;"><p>No notifications.</p></tab><tab id="tabcc3" class="tab-content clearfix" style="display: none;"><div class="notifycenterbtn userpic unavail" title="[Example] User"><img src="Users/User/Data/pic-default.svg" alt="User" height="39" width="52" onclick="$(`#usermenu`).toggle();$(`#controlcenter`).toggle();return false"></div><div class="notifycenterbtn unavail" title="[Example] User"><i class="fa fa-bluetooth" aria-hidden="true"></i><span>Bluetooth</span></div><div class="notifycenterbtn unavail" title="[Example] User"><i class="fa fa-sun-o" aria-hidden="true"></i><span>Brightness</span></div><div class="notifycenterbtn unavail" title="[Example] User"><i class="fa fa-plane" aria-hidden="true"></i><span>Airplane mode</span></div><div class="notifycenterbtn unavail" title="[Example] User"><i class="fa fa-compass" aria-hidden="true"></i><span>GPS</span></div></tab></div><nav class="navmenu right" id="usermenu" style="display: none;"><center><h1>User</h1></center><ul class="tabs center"><div onclick="$(`#usermenu`).toggle();return false">←</div><li class="first unavail current"><a href="#tabu1"><i class="fa fa-power-off" aria-hidden="true"></i> Power</a></li><li class="last"><a href="#tabu2"><i class="fa fa-user" aria-hidden="true"></i> Me</a></li></ul><tab id="tabu1" class="tab-content clearfix" style="display: block;"><ul><a onclick="lock();$(`#usermenu`).toggle();return false"><li draggable="true" class="navi-item"><div><img src="img/Navmenu/file.svg#black" class="navi-img"></div><p>Lock</p></li></a><a onclick="restart()"><li draggable="true" class="navi-item"><div><img src="img/Navmenu/folder.svg#black" class="navi-img"></div><p>Restart</p></li></a><a onclick="showDialog(`dialog`)"><li draggable="true" class="navi-item unavail"><div><img src="img/Navmenu/action.svg#black" class="navi-img"></div><p>Action</p></li></a><a onclick="showDialog(`dialog`)"><li draggable="true" class="navi-item unavail"><div><img src="img/Navmenu/shortcut.svg#black" class="navi-img"></div><p>Shortcut</p></li></a><a><li draggable="true" class="navi-item unavail"><div><img src="img/Navmenu/groups.svg#black" class="navi-img"></div><p>Group</p></li></a></ul></tab><tab id="tabu2" class="tab-content clearfix" style="display: none;"><ul><a onclick="showDialog(`dialog`)"><li draggable="true" class="navi-item unavail"><div><img src="img/Navmenu/background.svg#black" class="navi-img"></div><p>Wallpaper</p></li></a><a onclick="showDialog(`dialog`)"><li draggable="true" class="navi-item unavail"><div><img src="img/Navmenu/launcher.svg#black" class="navi-img"></div><p>Launcher</p></li></a><a onclick="showDialog(`dialog`)"><li draggable="true" class="navi-item unavail"><div><img src="img/Navmenu/themes.svg#black" class="navi-img"></div><p>Themes</p></li></a></ul></tab></nav>';
