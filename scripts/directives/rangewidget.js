angular.module('Persona')
  .directive('prRangeView', [function() {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'templates/range-view.html',
    };
  }])
  .directive('prRangeEdit', [function() {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'templates/range-edit.html',
    };
  }]);
