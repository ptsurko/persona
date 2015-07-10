(function() {
"use strict";

angular.module("Persona")
  .directive("prAvatar", [function() {
    return {
      restrict: "EA",
      require: "prAvatar",
      scope: {
        model: "=",
        mode: "="
      },
      replace: true,
      templateUrl: "templates/avatar.html",
      controller: ["$scope", function($scope) {
        var vm = this;
        vm.uploadAvatar = function(file) {
          var fr = new FileReader();
          fr.onload = function() {
            $scope.$apply(function() {
              vm.model.avatarUrl = fr.result;
            });
          };
          fr.readAsDataURL(file);
        };
      }],
      controllerAs: "ctrl",
      bindToController: true,
      link: function(scope, element, attrs, ctrl) {
        $(element).on("click", ".avatarEditor-uploadBtn", function() {
          $(".avatarEditor-uploadFile", element).click();
        });
        $(element).on("click", ".avatarEditor-uploadFile", function(e) {
          var files = e.target.files;

          if (FileReader && files && files.length) {
            scope.$apply(function() {
              ctrl.uploadAvatar(files[0]);
            });
          }
        });
      }
    };
  }]);
})();
