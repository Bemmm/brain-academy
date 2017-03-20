var config = {
	origin: 'https://reqres.in',
	createUser: '/api/users',
	loginUser: '/api/login'
};
$('#signUpForm').submit(function(event){
	event.preventDefault();
	var userObject = createObject(this);
	createUser(userObject);
});

function createObject(form){
	var userModel = {};
	// this = form
	$(form).find('input').each(function(i, element){
	   userModel[element.id] = element.value;
	});
	return userModel;
}

function createUser(user){
	$.ajax({
	    url: config.origin + config.createUser,
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