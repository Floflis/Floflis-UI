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

(function() {
  var el = {
    charging: document.getElementById('charging'),
    chargingTime: document.getElementById('chargingTime'),
    dischargingTime: document.getElementById('dischargingTime'),
    level: document.getElementById('level'),
    battery: document.getElementById('battery'),
    batteryBar: document.getElementById('battery-bar')
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
    el.batteryBar.style.width = battery.getPercentage() + '%';
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
})();

document.getElementById("onlyboot").innerHTML = 'Addon Status - Control Center';
var div = document.getElementById('system-apps');
div.innerHTML = div.innerHTML + '<div id="battery-container"><svg id="battery" width="18px" height="18px" viewBox="0 0 338 168" version="1.1" xmlns="http://www.w3.org/2000/svg" class="unavail"><g class="battery" id="#ffffffff"><path fill="#ffffff" opacity="1.00" d=" M 10.50 0.00 L 73.50 0.00 C 73.51 6.99 73.48 13.97 73.52 20.96 C 56.02 21.05 38.51 20.97 21.01 21.00 C 20.94 40.85 21.11 60.70 20.92 80.54 C 13.95 80.46 6.97 80.52 0.00 80.50 L 0.00 17.49 C 3.50 17.51 6.99 17.50 10.49 17.49 C 10.52 11.66 10.49 5.83 10.50 0.00 Z" /><path fill="#ffffff" opacity="1.00" d=" M 94.50 0.00 L 157.50 0.00 C 157.51 6.98 157.47 13.95 157.54 20.93 C 136.52 21.06 115.49 21.02 94.47 20.95 C 94.52 13.97 94.49 6.98 94.50 0.00 Z" /><path fill="#ffffff" opacity="1.00" d=" M 178.50 0.00 L 241.50 0.00 C 241.54 6.95 241.41 13.91 241.59 20.86 C 220.56 21.16 199.51 20.96 178.48 20.96 C 178.52 13.97 178.49 6.99 178.50 0.00 Z" /><path fill="#ffffff" opacity="1.00" d=" M 262.50 0.00 L 287.00 0.00 C 287.00 16.00 286.99 32.00 287.00 48.00 C 304.00 48.01 321.00 48.00 338.00 48.00 L 338.00 119.00 C 321.00 119.00 304.00 118.99 287.00 119.01 C 286.89 127.21 287.21 135.41 286.84 143.61 C 279.91 143.38 272.97 143.54 266.03 143.52 C 265.94 123.67 266.05 103.82 265.97 83.98 C 265.94 81.27 267.36 78.76 267.04 76.02 C 266.71 69.70 267.76 63.26 266.02 57.09 C 265.97 45.08 266.02 33.07 266.00 21.07 C 264.81 21.01 263.62 20.94 262.44 20.85 C 262.57 13.90 262.47 6.95 262.50 0.00 Z" /><path fill="#ffffff" opacity="1.00" d=" M 0.00 101.50 C 6.99 101.50 13.98 101.51 20.97 101.49 C 21.07 120.12 20.92 138.76 21.05 157.39 C 19.87 157.45 18.69 157.51 17.51 157.57 C 17.50 161.04 17.49 164.52 17.50 168.00 L 0.00 168.00 L 0.00 101.50 Z" /><path fill="#ffffff" opacity="1.00" d=" M 38.48 147.03 C 59.49 146.97 80.50 146.99 101.51 147.02 C 101.49 154.01 101.50 161.01 101.50 168.00 L 38.50 168.00 C 38.50 161.01 38.51 154.02 38.48 147.03 Z" /><path fill="#ffffff" opacity="1.00" d=" M 122.45 147.10 C 143.47 146.91 164.50 146.99 185.53 147.05 C 185.47 154.04 185.51 161.02 185.50 168.00 L 122.50 168.00 C 122.48 161.03 122.55 154.06 122.45 147.10 Z" /><path fill="#ffffff" opacity="1.00" d=" M 206.48 147.04 C 227.49 146.97 248.50 146.98 269.52 147.03 C 269.48 154.02 269.51 161.01 269.50 168.00 L 206.50 168.00 C 206.49 161.01 206.52 154.03 206.48 147.04 Z" /></g><svg class="charge" id="1f6e43ff" x="37" y="37" width="214" height="95" ><rect id="battery-bar" width="0%" height="100%" fill="#1f6e43"/></svg></svg></div>';