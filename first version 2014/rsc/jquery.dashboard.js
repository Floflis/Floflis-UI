//
// Namespace - Module Pattern.
//
var JQD = (function($) {
	return {
		//
		// Initialize the clock.
		//
		init_clock: function() {
			// Date variables.
			var date_obj = new Date();
			var hour = date_obj.getHours();
			var minute = date_obj.getMinutes();
			var day = date_obj.getDate();
			var year = date_obj.getFullYear();
			var suffix = 'AM';

			// Array for weekday.
			var weekday = [
				'Sunday',
				'Monday',
				'Tuesday',
				'Wednesday',
				'Thursday',
				'Friday',
				'Saturday'
			];

			// Array for month.
			var month = [
				'01',
				'02',
				'03',
				'04',
				'05',
				'06',
				'07',
				'08',
				'09',
				'10',
				'11',
				'12'
			];

			// Assign weekday, month, date, year.
			weekday = weekday[date_obj.getDate()];
			month = month[date_obj.getMonth()];

			// AM or PM?
			if (hour >= 12) {
				suffix = 'PM';
			}

			// Convert to 12-hour.
			if (hour > 12) {
				hour = hour - 12;
			}
			else if (hour === 0) {
				// Display 12:XX instead of 0:XX.
				hour = 12;
			}

			// Leading zero, if needed.
			if (minute < 10) {
				minute = '0' + minute;
			}

			// Build two HTML strings.
			var clock_time = hour + ':' + minute + ' ' + ' ' + suffix ;
			var clock_date = month + '/' + day + '/' + year;

			// Shove in the HTML.
			$('#clock').html(clock_time).attr('title', clock_time);
			$('#weekday').html(clock_date).attr('title', clock_date);

			// Update every 60 seconds.
			setTimeout(JQD.init_clock, 60000);
		},

		//
		// Initialize the desktop.
		//
		init_desktop: function() {
			if (window.location !== window.top.location) {
				window.top.location = window.location;
			}

			// Start clock.
			JQD.init_clock();

			// Relative or remote links?
			$('a').click(function() {
				var url = $(this).attr('href');
				this.blur();

				if (url.match(/^#/)) {
					return false;
				}
				else if (url.match('://')) {
					$(this).attr('target', '_blank');
					return true;
				}
			});

		}
	};
// Pass in jQuery.
})(jQuery);