angular.module('Persona')
    .controller('PersonaController', ['$scope', function($scope) {
      $scope.isEditMode = false;
      $scope.person = {
        name: 'Page title'
      };
      $scope.mode = WidgetMode.VIEW;
      $scope.rangeSection = new RangeSection('Diagram');
      $scope.rangeSection.addItem(new RangeItem('Temper', 4, 'Introvert', 'Extrovert'));
      $scope.rangeSection.addItem(new RangeItem('Sales', 6, 'Sensing', 'Intuition'));
      $scope.rangeSection.addItem(new RangeItem('Marketing', 7, 'Thinking', 'Feeling'));

      $scope.listSection = new TextListSection('List');
      $scope.listSection.addItem(new TextItem('Gender', 'Male'));
      $scope.listSection.addItem(new TextItem('Income', '45000'));

      $scope.storySection = new StorySection('Story', 'story');

      $scope.$watch('isEditMode', function(isEditMode) {
        $scope.mode = isEditMode ? WidgetMode.EDIT : WidgetMode.VIEW;
      });
    }]);
