angular.module('ordersModule')
.controller('orderItemController', function($scope, $routeParams, ordersService){
	getOrder();
	function getOrder(){
		var id = $routeParams.id;
		ordersService.getOrder(id)
		.then(function(order){
			$scope.order = order;
		})
		.catch(function(err){

		});
	};
});