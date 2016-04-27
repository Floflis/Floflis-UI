var $ = document;
var el = {
  charging: $.getElementById('charging'),
  chargingTime: $.getElementById('chargingTime'),
  dischargingTime: $.getElementById('dischargingTime'),
  level: $.getElementById('level'),
  battery: $.getElementById('battery'),
  batteryBar: $.getElementById('battery-bar')
};

battery.on('ready', function() {
  console.log('ready');
  console.log('isCharging: ' + battery.isCharging());
  console.log('isDischarging: ' + battery.isDischarging());
  console.log('getChargingTime: ' + battery.getChargingTime());
  console.log('getDischargingTime: ' + battery.getDischargingTime()); // seconds
  console.log('getLevel: ' + battery.getLevel());
  console.log('getPercentage: ' + battery.getPercentage());
  console.log('getStatus: ' + battery.getStatus());

  updateCharging(battery.isCharging());
  updateChargingTime(battery.getChargingTime());
  updateDischargingTime(battery.getDischargingTime());
  updateLevel(battery.getLevel());
});

battery.on('chargingChange', updateCharging);

battery.on('chargingTimeChange', updateChargingTime);

battery.on('dischargingTimeChange', updateDischargingTime);

battery.on('levelChange', updateLevel);

battery.on('error', function(error) {
  alert(error);
  console.error(error);
});

function updateCharging(isCharging) {
  setText(el.charging, isCharging);
}

function updateChargingTime(chargingTime) {
  setText(el.chargingTime, chargingTime + toHMS(chargingTime));
}

function updateDischargingTime(dischargingTime) {
  setText(el.dischargingTime, dischargingTime + toHMS(dischargingTime));
}

function updateLevel(level) {
  setText(el.level, level + toPercent(level));
  var statusClass = 'ok';
  if (level < 0.2) {
    statusClass = 'warning';
  }
  if (level < 0.1) {
    statusClass = 'critical';
  }
  document.getElementById('batteryBar').setAttribute('width', battery.getPercentage() + "%");
  el.batteryBar.setAttribute('class', statusClass);
}

function toPercent(value) {
  return ' (' + (value * 100) + '%)';
}

function toHMS(durationInSeconds) {
  if (!Number.isFinite(durationInSeconds)) return '';
  var hours = Math.floor(durationInSeconds / 3600);
  var seconds = durationInSeconds % 60;
  var minutes = Math.floor((durationInSeconds - hours * 3600 - seconds) / 60);
  return ' (' + hours + 'h:' + minutes + 'm:' + seconds + 's)';
}

function setText(el, t) {
  if (document.all) {
    el.innerText = t;
  } else{
    el.textContent = t;
  }
}
