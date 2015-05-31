angular.module('Persona')
  .directive('prStoryView', [function() {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'templates/story-view.html',
    };
  }])
  .directive('prStoryEdit', [function() {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'templates/story-edit.html',
    };
  }]);
