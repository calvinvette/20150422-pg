'use strict';
// Singleton/Factory
angular.module('tApp', [
  'ngRoute'
  ,'ngTouch'
  //,'hmTouchEvents'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/QuestionEditor', {
        templateUrl: 'scripts/controllers/QuestionEditor/QuestionEditor.html',
        controller: 'QuestionEditor'
      })
	  .when('/Login', {
        templateUrl: 'scripts/controllers/LoginRegistration/LoginRegistration.html',
        controller: 'LoginRegistration'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
