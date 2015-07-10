(function() {
"use strict";

angular.module("app.persona")
  .directive("prRange", [function() {
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
      templateUrl: "templates/range.html",
    };
  }]);
})();
