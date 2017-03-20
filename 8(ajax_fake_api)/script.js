$(document).ready(function(){
	var token = localStorage.getItem('loggedUser');
	alert(token);
})
var config = {
	origin: 'https://reqres.in',
	createUser: '/api/users',
	loginUser: '/api/login'
};

$('#signUpForm').submit(function(event){
	event.preventDefault();
	var userObject = createObject(this);
	sendData(userObject, config.createUser);
});

$('#signInForm').submit(function(event){
	event.preventDefault();
	var userObject = createObject(this);
	sendData(userObject, config.loginUser);
});

function createObject(form){
	var userModel = {};
	$(form).find('input').each(function(i, element){
	   userModel[element.id] = element.value;
	});
	return userModel;
}
/**
 * sends data to the server, for logining or registration
 * @param  {Object} user  is generated in function createObject (19)
 * @param  {String} route global variable, declared at first string
 * @return {Object}    	  response from the server
 */
function sendData(user, route){
	$.ajax({
	    url: config.origin + route,
	    type: "POST",
	    data: user,
	    success: function(response){
	    	if(response.token){
	    		localStorage.setItem('loggedUser', response.token);
	    	};
	        console.log(response);
	    },
	    error: function(error){
	    	console.log(error);
	    }
	});
}