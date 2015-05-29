"use strict";
/**
 * LoginRegistration.controller.js
 *
*/
angular.module('tApp').controller('LoginRegistration', function($scope, $rootScope, UserRegistrationService) {
	$scope.userName = "";
	$scope.email = "";
	$scope.password = "";
	$scope.confirmPassword = "";
	$scope.displayName = "";

	$scope.Login = function() {
		console.log("Login Pressed: " + $scope.userName + " - " + $scope.password);
	};

  $scope.Register = function() {
    console.log("Register: " + $scope.userName + " - " + $scope.password);
    var player = new Player($scope.email, $scope.displayName, $scope.userName, -1);
    // TODO - add in encryption for password
    player.password = $scope.password;
    $rootScope.$broadcast('UserRegistrationEvent', player);
  };

  var player = UserRegistrationService.getPlayer(); // TODO - change this to a Promise
  if (player) {
    $scope.userName = player.userName;
    $scope.displayName = player.displayName;
    $scope.email = player.email;
  }
});


//blic email : string, public displayName : string, public playerId : nu
