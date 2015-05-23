( function() {
  'use strict';

  angular.module('blueprint', [
    // Libraries
    'templates',
    'ngRoute' 
  ])
  .config(['$routeProvider', 
    function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'version_one/landing/landing.html'
        });
    }
  ]);
})();