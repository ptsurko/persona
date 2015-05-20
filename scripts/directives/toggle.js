angular.module('Persona')
  .directive('prToggle', [function() {
    return {
      restrict: 'EA',
      require: '^ngModel',
      link: function(scope, element, attrs, ctrl) {
        element.change(function() {
          var checked = $(this).prop('checked');

          ctrl.$setViewValue(checked);
        });
        ctrl.$render = renderCurrentValue;
        renderCurrentValue();

        function renderCurrentValue() {
          element.bootstrapToggle(ctrl.$viewValue ? 'on' : 'off');
        }
      }
    };
  }]);
