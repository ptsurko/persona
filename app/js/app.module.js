
angular.module("app", ["app.core", "ui.router", "app.persona"])
  .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    // Now set up the states
    $stateProvider
      .state("persona", {
        url: "/",
        templateUrl: "js/persona/persona.html",
        controller: "PersonaController",
        controllerAs: "ctrl"
      });
  }]);
