'use strict';
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

/*angular.module('IBSTestV2', ['ionic', 'config'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
});
*/

var app = angular.module('IBSTestV2', ['ionic'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
});

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider
  .state('schedule', {
    url: '/schedule',
    views: {
      schedule : {
        templateUrl: 'templates/schedule.html'
      }
    }
  })
  .state('symptoms', {
    url: '/symptoms',
    views: {
      symptoms : {
        templateUrl: 'templates/symptoms.html'
      }
    }
  })
  .state('past', {
    url: '/past',
    views: {
      past : {
        templateUrl: 'templates/past.html'
      }
    }
  })
  .state('setup', {
    url: '/setup',
    views: {
      setup : {
        templateUrl: 'templates/setup.html'
      }
    }
  })
  .state('test', {
    url: '/header_test',
    views: {
      setup : {
        templateUrl: 'templates/header_test.html'
      }
    }
  })
});


