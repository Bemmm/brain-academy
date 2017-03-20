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
	// this = form
	$(form).find('input').each(function(i, element){
	   userModel[element.id] = element.value;
	});
	return userModel;
}


function sendData(user, route){
	$.ajax({
	    url: config.origin + route,
	    type: "POST",
	    data: user,
	    success: function(response){
	        console.log(response);
	    },
	    error: function(error){
	    	console.log(error);
	    }
	});
}