'use strict';

/**
 * @ngdoc service
 * @name testSisenseApp.authToken
 * @description
 * # authToken
 * Factory in the testSisenseApp.
 */
angular.module('testSisenseApp').factory('authToken', function ($window) {
  var storage = $window.localStorage;
  var cachedToken;


    // Public API here
  return {
    setToken: function(token) {
      cachedToken = token;
      storage.setItem('userToken', token);
    },
    getToken: function() {
      if(!cachedToken) {
        cachedToken = storage.getItem('userToken');
      }

      return cachedToken;
    },
    isAuthencticated: function() {
      // gets result cast to bool and inverse it
      return !!this.getToken();
    }
  };
});
