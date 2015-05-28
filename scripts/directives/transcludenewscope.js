angular.module('Persona').
  directive('prTranscludeNewScope', function() {
    return {
      compile: function(tElement, tAttrs, transclude) {
        return function(scope, iElement, iAttrs) {
          transclude(scope.$new(), function(clone) {
            iElement.append(clone);
          });
        };
      }
    };
  });
