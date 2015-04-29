angular.module('Persona')
    .directive('editable', function($compile) {
      return {
        replace: true,
        restrict: 'EA',
        template: '<input type="text">'
      };
    });
