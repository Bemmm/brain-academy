angular.module('app')
.config(function($routeProvider, $locationProvider) {
$locationProvider.hashPrefix('');
    $routeProvider
    .when("/", {
        templateUrl: "./main.html",
        controller: 'mainController'
    })
    .when("/sign-in", {
        templateUrl : "./views/authorization/signIn/signIn.html",
        controller: 'signInController'
    })
    .when("/orders/:id", {
        templateUrl : "./views/orders/order-item/order-item.html",
        controller: 'orderItemController'
    })
    .when("/profile/:id", {
        templateUrl : "./views/profile/profile.html",
        controller: 'profileController'
    })
});