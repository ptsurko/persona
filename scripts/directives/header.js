angular.module('Persona')
  .directive('prHeader', [function() {
    return {
      restrict: 'EA',
      scope: {
        level: '=',
        header: '='
      },
      replace: true,
      transclude: true,
      template: '<h1>{{header}}</h1>'
      // link: function(scope, element, attrs, ctrl, transclude) {
      //   scope.$watch('level + header', function(level) {
      //     if (level) {
      //       transclude(scope, function(clone, scope) {
      //         debugger
      //         element.append(clone);
      //       });
      //     }
      //   });
      // }
    };
  }])
