angular.module('Persona')
    .controller('PersonaController', ['$scope', function($scope) {
      var defaultProperty = {
        name: 'Development',
        min: 'Judging',
        max: 'Perceiving',
        value: 3
      };
      $scope.properties = []
      $scope.properties.push({
        name: 'Temper',
        min: 'Extrovert',
        max: 'Introvert',
        value: 4
      });
      $scope.properties.push({
        name: 'Sales',
        min: 'Sensing',
        max: 'Intuition',
        value: 1
      });
      $scope.properties.push({
        name: 'Marketing',
        min: 'Thinking',
        max: 'Feeling',
        value: 7
      });

      $scope.deleteProperty = function(property) {
        var index = $scope.properties.indexOf(property);
        if (index >= 0) {
          $scope.properties.splice(index, 1);
        }
      };

      $scope.addProperty = function() {
        $scope.properties.push(angular.extend({}, defaultProperty));
      };
    }]);
