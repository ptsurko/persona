(function() {
"use strict";

angular.module("app.persona")
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
      templateUrl: "js/persona/story.view.html"
    };
  }]);
})();
