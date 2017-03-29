angular.module('app', [])
.controller('mainController',function($scope){
	// _________________
	$scope.newTodo = {
		name: '',
		description:''
	};
	$scope.todos = [
		{
			name: 'Task1',
			description: 'Description1'
		},
		{
			name: 'Task2',
			description: 'Description2'
		}
	];
	$scope.createTodo = function(){
		$scope.todos.push($scope.newTodo);
		$scope.newTodo = {
			name: '',
			description:''
		};
	};
	$scope.finishTodo = function(todo){
		todo.status = 'finished';
	};
	$scope.removeTodo = function(todo){
		var index = $scope.todos.indexOf(todo);
		$scope.todos.splice(index, 1);
		console.log(index);
	}

	// _________________


});
