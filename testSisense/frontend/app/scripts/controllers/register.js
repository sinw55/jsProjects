'use strict';

/**
 * @ngdoc function
 * @name testSisenseApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the testSisenseApp
 */
angular.module('testSisenseApp')
  .controller('RegisterCtrl', function ($scope, $rootScope, $http, authToken) {
    $scope.submit = function() {
    	var url = 'http://localhost:3000/register';
    	var user = { 
            email: $scope.email,
            pasword: $scope.password 
        };

    	$http.post(url, user)
    		.success(function(res) {
    			console.log("good");
                authToken.setToken(res.token)
    		})
    		.error(function(err) {
    			console.log("bad");
    		});
    };
  });
