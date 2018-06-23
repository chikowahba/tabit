var rosApp = angular.module("rosApp", ['ui.router','dndLists']);



rosApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "src/modules/home/home.html",
      controller: 'HomeController'
    })

    .state('edit', {
      url: "/edit",
      templateUrl: "src/modules/edit/edit.html",
      controller: 'EditController'
    })

});
