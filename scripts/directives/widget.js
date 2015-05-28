angular.module('Persona')
  .directive('prWidget', [function() {
    return {
      restrict: 'EA',
      require: 'prWidget',
      scope: {
        mode: '=',
        model: '='
      },
      //TODO: use ng-model
      replace: true,
      transclude: true,
      template: '<section>' +
                  '<div class="widget" data-pr-transclude-new-scope></div>' +
                '</section>',
      controller: function($scope) {
        this.views = [];
        this.addView = function(element, transclude, mode) {
          this.views.push({
            element: element,
            transclude: transclude,
            mode: mode
          });
        };
      },
      link: function(scope, element, attrs, ctrl) {
        scope.$watch(attrs.mode, function(newMode, oldMode) {
          var mode = newMode || WidgetMode.VIEW;
          if (ctrl.views.length) {
            element.contents().remove();
            ctrl.views.forEach(function(view) {
              if (view.mode == mode) {
                if (view.transclude) {
                  view.transclude(scope, function(clone, scope) {
                    element.append(clone);
                  });
                } else {
                  element.append(view.element);
                }
              }
            });
          }
        });
      }
    };
  }])
  .directive('prWidgetView', [function() {
    return {
      restrict: 'EA',
      transclude: true,
      require: '^prWidget',
      link: function(scope, element, attrs, ctrl, transclude) {
        ctrl.addView(element, transclude, WidgetMode.VIEW);
      }
    };
  }])
  .directive('prWidgetEdit', [function() {
    return {
      restrict: 'EA',
      transclude: true,
      require: '^prWidget',
      link: function(scope, element, attrs, ctrl, transclude) {
        ctrl.addView(element, transclude, WidgetMode.EDIT);
      }
    };
  }]);


var WidgetMode = {
  VIEW: 'view',
  EDIT: 'edit'
};
