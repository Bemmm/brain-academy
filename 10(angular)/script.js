angular.module('app', [])
// .service('apiService', function(){
// 	var todos = [
// 		{
// 			name: 'Task1',
// 			description: 'Description1'
// 		},
// 		{
// 			name: 'Task2',
// 			description: 'Description2'
// 		}
// 	];

// 	this.getTodos = function(){
// 		return todos;
// 	};
// 	this.createTodo = function(item){
// 		todos.push(item);
// 		return todos;
// 	}
// })
.factory('apiService', ['$http', function($http){
	var todos = [
		{
			name: 'Task1',
			description: 'Description1'
		},
		{
			name: 'Task2',
			description: 'Description2'
		}
	];
	var publicMethods = {
		getTodos: function(){
			return todos;
		},
		createTodo: function(item){
			todos.push(item);
			return todos;
		},
		getUsers: function(){
			return $http.get('https://jsonplaceholder.typicode.com/users')
			.then(function(data){
				return data;
			})
			.catch(function(err){
				alert(err);
			})
		}
	};
	return publicMethods;
}])

.controller('mainController', ['$scope', 'apiService', function($scope, apiService){
	$scope.todos = apiService.getTodos();

	// _________________
	$scope.newTodo = {
		name: '',
		description:''
	};


	$scope.createTodo = function(){
		apiService.createTodo($scope.newTodo);
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
	$scope.getUsers = function(){
		apiService.getUsers().then(function(data){
			console.log(data);
		});
	}

	// _________________
}]);
