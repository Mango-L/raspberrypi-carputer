mpdClient = MPD(8800);

/**
* Car Computer AngularJS Application
**/
angular.module(
                'landcruiser', 
                [
                  'ionic', 
                  'landcruiser.controllers', 
                  'landcruiser.sound',
                  'gpsAssist',
                  'weatherAssist',
                  'elif',
                  'ImgCache',
                  'angular-growl',
                  'nemLogging',
                  'uiGmapgoogle-maps'
                ]
              )

.run(function($ionicPlatform, ImgCache) {
  $ionicPlatform.ready(function() {
    ImgCache.$init();
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, ImgCacheProvider, growlProvider) {
  $stateProvider

    // Handler for the side menu
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })

    // Default application home page
    .state('app.home', {
      url: '/home',
      views: {
        'menuContent' :{
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
      },
      cache: false
    })

    // Navigation the MPD filesystem
    .state('app.files', {
      url: '/music-files/:param1',
      views: {
        'menuContent' :{
          templateUrl: 'templates/files.html',
          controller: 'FilesCtrl'
        }
      },
      cache: false      
    })

    // Switch to darkened "night mode" view
    .state('app.night', {
      url: '/night-mode',
      views: {
        'menuContent' :{
          templateUrl: 'templates/night-mode.html',
          controller: 'NightModeCtrl'
        }
      },
      cache: false      
    })

    // List the predefined MPD playlists
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent' :{
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      },
      cache: false      
    })

    // Show the current play queue
    .state('app.current-queue', {
      url: '/current-queue',
      views: {
        'menuContent' :{
          templateUrl: 'templates/current-queue.html',
          controller: 'CurrentQueueCtrl'
        }
      },
      cache: false
    })

    // Get a weather forecast for the current location
    .state('app.weather', {
      url: '/weather',
      views: {
        'menuContent' :{
          templateUrl: 'templates/weather.html',
          controller: 'WeatherCtrl'
        }
      }
    })

    // Show the current location of the car
    .state('app.location', {
      url: '/car-location',
      views: {
        'menuContent' :{
          templateUrl: 'templates/car-location.html',
          controller: 'LocationCtrl'
        }
      }
    })

    // Reference materials page
    .state('app.reference', {
      url: '/reference',
      views: {
        'menuContent' :{
          templateUrl: 'templates/reference.html',
          controller: 'ReferenceCtrl'
        }
      }
    })

  // Default route (used as a fallback should the request not match any of the defined routes)
  $urlRouterProvider.otherwise('/app/home');

  // Set options for the ImgCache module
  ImgCacheProvider.setOptions({
      debug: true,
      usePersistentCache: true
  });

  ImgCacheProvider.manualInit = true;  

  /**
  * Disable the page transistions
  */
  $ionicConfigProvider.views.transition('none');
  $ionicConfigProvider.scrolling.jsScrolling(false);
  
  // Set a global timeout on notification messages
  growlProvider.globalTimeToLive(1200);
  growlProvider.globalDisableCountDown(true);
  growlProvider.globalPosition('bottom-center');
  growlProvider.onlyUniqueMessages(false);
});