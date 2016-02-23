'use strict';

describe('Controller: SisenseCtrl', function () {

  // load the controller's module
  beforeEach(module('testSisenseApp'));

  var SisenseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SisenseCtrl = $controller('SisenseCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SisenseCtrl.awesomeThings.length).toBe(3);
  });
});
