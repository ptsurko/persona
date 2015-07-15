(function() {
"use strict";

angular.module("app.persona")
  .directive("prAvatarFit", [function() {
    return {
      restrict: "EA",
      link: function(scope, element) {
        element.addClass("hide");
        element.on("load", function(e) {
          element.removeClass("avatar-photo--fitWidth");
          element.removeClass("avatar-photo--fitHeight");

          var width = e.target.naturalWidth;
          var height = e.target.naturalHeight;
          if (width > height) {
            element.addClass("avatar-photo--fitWidth");
          } else if (width < height) {
            element.addClass("avatar-photo--fitHeight");
          }
          element.removeClass("hide");
        });
      }
    };
  }]);
})();
