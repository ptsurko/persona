angular.module('Persona')
    .controller('PersonaController', ['$scope', function($scope) {
      var defaultProperty = {
        name: 'Development',
        min: 'Judging',
        max: 'Perceiving',
        value: 3
      };
      $scope.isEditMode = false;
      $scope.mode = WidgetMode.VIEW;
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
        value: 6
      });
      $scope.properties.push({
        name: 'Marketing',
        min: 'Thinking',
        max: 'Feeling',
        value: 7
      });
      $scope.rangeSection = new RangeSection('Diagram');
      $scope.rangeSection.addItem(new RangeItem('Temper', 4, 'Introvert', 'Extrovert'));
      $scope.rangeSection.addItem(new RangeItem('Sales', 6, 'Sensing', 'Intuition'));
      $scope.rangeSection.addItem(new RangeItem('Marketing', 7, 'Thinking', 'Feeling'));

      $scope.listSection = new TextListSection('List');
      $scope.listSection.addItem(new TextItem('Gender', 'Male'));
      $scope.listSection.addItem(new TextItem('Income', '45000'));

      $scope.storySection = new StorySection('Story', 'story');

      // $scope.addDiagramItem = function() {
      //   $scope.rangeSection.items.push(new RangeItem('Development', 2, 'Judging', 'Perceiving'));
      // };

      // $scope.removeDiagramItem = function(item) {
      //
      // };

      // $scope.addListItem = function() {
      //   $scope.listSection.items.push(new TextItem('Age', '30'));
      // };

      // $scope.removeListItem = function(item) {
      //   var index = $scope.listSection.items.indexOf(item);
      //   if (index >= 0) {
      //     $scope.listSection.items.splice(index, 1);
      //   }
      // };

      $scope.$watch('isEditMode', function(isEditMode) {
        $scope.mode = isEditMode ? WidgetMode.EDIT : WidgetMode.VIEW;
      });
    }]);
