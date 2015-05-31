angular.module('Persona')
  .directive('prTextlistView', [function() {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'templates/textlist-view.html',
    };
  }])
  .directive('prTextlistEdit', [function() {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'templates/textlist-edit.html',
    };
  }]);
