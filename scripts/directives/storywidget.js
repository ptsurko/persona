(function() {
"use strict";

angular.module("Persona")
  .directive("prStory", [function() {
    return {
      restrict: "EA",
      scope: {
        model: "=",
        mode: "="
      },
      replace: true,
      controller: function() {},
      controllerAs: "ctrl",
      bindToController: true,
      templateUrl: "templates/story.html",
    };
  }]);
})();
