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
    return $http.get('/api/sysinfo').
  then(function(response) {
    $scope.systemStats.memory = response.data.totalmem; //results
    $scope.systemStats.loadavg = response.data.loadavg;
    $scope.systemStats.ostype = response.data.ostype;
    $scope.systemStats.os = response.data.os;
    $scope.systemStats.uptime = response.data.uptime;
  }, function getError(response) {
    $scope.systemStats = response;
  });

  });

angular.module('resumeAmarandeiApp')
  .filter('secondsToDateTime', [function() {
      return function(seconds) {
          return new Date(1970, 0, 1).setSeconds(seconds);
      };
  }])
