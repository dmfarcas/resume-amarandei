'use strict';

/**
 * @ngdoc function
 * @name resumeAmarandeiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the resumeAmarandeiApp
 */
angular.module('resumeAmarandeiApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.systemStats =  {};
    $http.get('/api/uptime').
    then(function(response) {
      $scope.systemStats.uptime = response.data;
    }, function getError(response) {
      $scope.systemStats.uptime = response;
    });
    $http.get('/api/sysinfo').
      then(function(response) {
        $scope.systemStats.memory = response.data.totalmem; //results
        $scope.systemStats.loadavg = response.data.loadavg;
        $scope.systemStats.ostype = response.data.ostype;
        $scope.systemStats.os = response.data.os;
      }, function getError(response) {
        $scope.systemStats = response;
    });


  });
