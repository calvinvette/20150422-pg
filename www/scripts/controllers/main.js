'use strict';

// Lookup existing tApp
angular.module('tApp')
// Factory 
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
	  'TypeScript',
	  'Jasmine',
	  'Mocha',
	  'Protractor',
      'Karma'
    ];
  });
