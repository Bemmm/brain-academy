angular.module('app')
.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "./main.html",
        controller: 'mainController'
    })
    .when("/sign-in", {
        templateUrl : "./modules/authorization/signIn.html"
    })
});