# Raspberry Pi Car Computer 

UI component of a Raspberry Pi car computer setup. [Visit this blog post for more information on the project and building your own Raspberry Pi based "carputer".](https://www.development-cycle.com/2016/02/building-a-raspberry-pi-car-computer/)

# Prerequisites
The UI acts as a frontend for the [MPD](http://www.musicpd.org/) and [GPSD](http://www.catb.org/gpsd/). So obviously to have the frontend work properly these two daemons must be installed and configured.

The system uses PHP for getting GPS data so at minimum the PHP5-common, PHP5-cli and PHP5-curl packages must be installed. The application also uses the [HTML5 Filesystem API](http://www.html5rocks.com/en/tutorials/file/filesystem/) for the local storage of album art. This API is poorly supported so either Chromium or Chrome needs to be used for displaying the application.

# Installation

* Install all of the required dependencies.
* Edit line 36 & 37 of www/php/services.php replacing the values with your application keys for the [Here.com API](https://developer.here.com/plans/api/consumer-mapping) - Required for speed limit and weather information.
* From the command line run the start.sh script to start a and instance of the internal PHP webserver on port 8000.
* Open Chrome or Chromium and visit the location localhost:8000 to see the application. Keep in mind that it has been designed with the Raspberry Pi Offical touchscreen in mind i.e 800x600.

# No GPS

GPS functionality can be tested without a GPS fix or even a GPS device. To enable testing mode edit line 24 of php/gps.php and change the value of the $testmode to a zero ( it would be more intuitive the other way around this script comes directly from the GPSD project in its current iteration though ). Editing the test JSON object starting at line 52 can also be useful when trying to test functionality for a specific location.

# Credits

This project makes the use of a number of third party Open Source libraries. You are all fantastic! Thank you for all your hardwork its much appreciated!

* [Ionic Framework](https://github.com/driftyco/ionic)
* [ng-elif](https://github.com/zachsnow/ng-elif)
* [mpd.js](https://github.com/bobboau/MPD.js)
* [angular-imgcache.js](https://github.com/jBenes/angular-imgcache.js)
* [angular-growl-2](https://github.com/JanStevens/angular-growl-2)
* [websockify](https://github.com/kanaka/websockify)
* [mpd](http://www.catb.org/gpsd/)
* [gpsd](http://www.musicpd.org/)

# Screenshots

![Home screen while travelling at 54kph and playing music](/screenshots/home_screen_playing.png?raw=true "Home Screen")

![Browsing the music collection stored on the filesystem](/screenshots/music_files.png?raw=true "Music Files")

![Displaying the current location of a car using Google Maps](/screenshots/car_location.png?raw=true "Car location")

![Interacting with the current music play queue](/screenshots/play_queue.png?raw=true "Play Queue")

# Licence

Copyright (C) 2016 [Anthony Mills](http://www.anthony-mills.com)

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.