angular.module('app')
.config(function($routeProvider, $locationProvider) {
$locationProvider.hashPrefix('');
    $routeProvider
    .when("/", {
        templateUrl: "./main.html",
        controller: 'mainController'
    })
    .when("/sign-in", {
        templateUrl : "./modules/authorization/signIn/signIn.html",
        controller: 'signInController'
    })
});