(function() {
"use strict";

angular.module("Persona")
  .directive("prTextlist", [function() {
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
      templateUrl: "templates/textlist.html",
    };
  }]);
})();
