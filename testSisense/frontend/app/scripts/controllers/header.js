'use strict';

/**
 * @ngdoc function
 * @name testSisenseApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the testSisenseApp
 */
angular.module('testSisenseApp').controller('HeaderCtrl', function ($scope, authToken) {
	$scope.isAuthencticated = authToken.isAuthencticated;
});
