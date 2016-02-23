'use strict';

/**
 * @ngdoc directive
 * @name testSisenseApp.directive:sameAs
 * @description
 * # sameAs
 */
/*angular.module('testSisenseApp')
  .directive('sameAs', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the sameAs directive');
      }
    };
  });
*/
angular.module('testSisenseApp').directive('validateEquals', function () {
	return {
		require: 'ngModel',
		link: function(scope, element, attrs, ngModelCtrl) {
			function validateEqual(value) {
				var valid = (value === scope.$eval(attrs.validateEquals));
				ngModelCtrl.$setValidity('equal', valid);
				return valid ? value : undefined;
			}

			ngModelCtrl.$parsers.push(validateEqual);
			ngModelCtrl.$formatters.push(validateEqual);

			scope.$watch(attrs.validateEquals, function() {
				ngModelCtrl.$setViewValue(ngModelCtrl.$viewValue);
			});
		}
	};
});