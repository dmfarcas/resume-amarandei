'use strict';

/**
 * @ngdoc overview
 * @name resumeAmarandeiApp
 * @description
 * # resumeAmarandeiApp
 *
 * Main module of the application.
 */
angular
  .module('resumeAmarandeiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
