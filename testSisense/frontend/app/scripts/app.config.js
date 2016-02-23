'use strict';

angular
  .module('testSisenseApp').config(function($urlRouterProvider, $stateProvider) {
  	$urlRouterProvider.otherwise('/');
  	
  	$stateProvider

  		.state('main', {
  			url: '/',
  			templateUrl: 'views/main.html'
  		})

      .state('sisense', {
        url: '/sisense',
        templateUrl: 'views/sisense.html',
        controller: 'SisenseCtrl'
      })

  		.state('register', {
  			url: '/register',
  			templateUrl: '/views/register.html',
        controller: 'RegisterCtrl'
  		});
  });