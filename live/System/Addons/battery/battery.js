(function(root) {
  'use strict';

  function observable(el) {
    var callbacks = {};

    el.on = function(name, fn) {
      if (typeof fn !== 'function') {
        throw new TypeError('Second argument for "on" method must be a function.');
      }
      (callbacks[name] = callbacks[name] || []).push(fn);
      return el;
    };

    el.one = function(name, fn) {
      fn.one = true;
      return el.on.call(el, name, fn);
    };

    el.off = function(name, fn) {
      if (name === '*') return (callbacks = {}, callbacks);
      if (!callbacks[name]) return;
      if (fn) {
        if (typeof fn !== 'function') {
          throw new TypeError('Second argument for "off" method must be a function.');
        }
        callbacks[name] = callbacks[name].map(function(fm, i) {
          if (fm === fn) {
            callbacks[name].splice(i, 1);
          }
        });
      } else {
        delete callbacks[name];
      }
    };

    el.trigger = function(name) {
      if (!callbacks[name]) return;
      var args = [].slice.call(arguments, 1);

      callbacks[name].forEach(function(fn, i) {
        if (fn) {

          fn.apply(fn, args);
          if (fn.one) callbacks[name].splice(i, 1);
        }
      });
      return el;
    };

    return el;
  }

  function Battery() {
    observable(this);

    if (typeof navigator.getBattery !== 'function') {
      navigator.getBattery = function () {
        return new Promise(function (resolve, reject) {
          if (navigator.battery) {
            resolve(navigator.battery);
          } else {
            reject(new Error('Battery Status API not implemented.'));
          }
        });
      };
    }

    navigator.getBattery().then(function(batteryManager) {
      this._battery = batteryManager;
      this.trigger('ready', this);
      this._battery.addEventListener('chargingchange', function() {
        this.trigger('chargingChange', this.isCharging());
      }.bind(this));
      this._battery.addEventListener('chargingtimechange', function() {
        this.trigger('chargingTimeChange', this.getChargingTime());
      }.bind(this));
      this._battery.addEventListener('dischargingtimechange', function() {
        this.trigger('dischargingTimeChange', this.getDischargingTime());
      }.bind(this));
      this._battery.addEventListener('levelchange', function() {
        this.trigger('levelChange', this.getLevel());
      }.bind(this));
    }.bind(this), function(error) {
      this.trigger('error', error);
    }.bind(this));
  }


  Battery.prototype.getLevel = function() {
    return this._battery.level;
  };

  Battery.prototype.getPercentage = function() {
    return this.getLevel() * 100;
  };

  Battery.prototype.isCharging = function() {
    return this._battery.charging;
  };

  Battery.prototype.isDischarging = function() {
    return !this.isCharging();
  };

  Battery.prototype.getChargingTime = function() {
    var chargingTime = this._battery.chargingTime;
    return Number.isFinite(chargingTime) ? chargingTime : 0;
  };

  Battery.prototype.getDischargingTime = function() {
    var dischargingTime = this._battery.dischargingTime;
    return Number.isFinite(dischargingTime) ? dischargingTime : 0;
  };

  Battery.prototype.getStatus = function() {
    return this.isCharging() ? 'charging' : 'discharging';
  };

  root.battery = new Battery();
})(this);







var $ = document;
var el = {
  charging: $.getElementById('charging'),
  chargingTime: $.getElementById('chargingTime'),
  dischargingTime: $.getElementById('dischargingTime'),
  level: $.getElementById('level'),
  batteryBar: $.querySelector('#battery-bar')
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
  el.batteryBar.setAttribute('width', battery.getPercentage() + '%');
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