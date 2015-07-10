(function() {
"use strict";

var WidgetMode = {
  VIEW: "view",
  EDIT: "edit"
};

angular.module("app.persona")
  .controller("PersonaController", ["$scope", function($scope) {
    var vm = this;
    vm.isEditMode = false;
    vm.person = {
      name: "Page title"
    };
    vm.mode = WidgetMode.VIEW;
    vm.rangeSection = new RangeSection("Diagram");
    vm.rangeSection.addItem(new RangeItem("Temper", 4, "Introvert", "Extrovert"));
    vm.rangeSection.addItem(new RangeItem("Sales", 6, "Sensing", "Intuition"));
    vm.rangeSection.addItem(new RangeItem("Marketing", 7, "Thinking", "Feeling"));

    vm.listSection = new TextListSection("List");
    vm.listSection.addItem(new TextItem("Gender", "Male"));
    vm.listSection.addItem(new TextItem("Income", "45000"));

    vm.storySection = new StorySection("Story", "story");

    vm.avatarSection = new AvatarSection();

    $scope.$watch(function() { return vm.isEditMode; }, function(isEditMode) {
      vm.mode = isEditMode ? WidgetMode.EDIT : WidgetMode.VIEW;
    });
  }]);
})();
