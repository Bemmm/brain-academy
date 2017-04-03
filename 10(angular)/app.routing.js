angular.module('app')
.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "./main.html",
        controller: 'mainController'
    })
    // .when("/", {
    //     templateUrl : "./modules/authorization/signIn.html"
    // })
});