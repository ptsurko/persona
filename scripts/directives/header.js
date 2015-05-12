angular.module('Persona')
  .directive('prHeader', [function() {
    return {
      restrict: 'EA',
      scope: {
        header: '='
      },
      link: function(scope, element, attrs, ctrl, transclude) {
        var level = attrs['level'] || 1;
        var headerEl = angular.element('<h' + level + '></h' + level + '>');
        element.replaceWith(headerEl);

        scope.$watch('header', function(header) {
          headerEl.text(header);
        });
        scope.$on('$destroy', function() {
          headerEl.remove();
        });
      }
    };
  }])
