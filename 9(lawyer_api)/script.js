
var config = {
	origin: 'http://31.131.22.106',
	prefix: '/api',
	login: '/login',
	person: '/person'
};
$(document).ready(function(){

});
$('#loginForm').submit(function(event){
	event.preventDefault();
	var loginUrl = config.origin + config.prefix + config.login;
	var loginModel = {};
	loginModel.email = $(this).find('input#email')[0].value;
	loginModel.password = $(this).find('input#password')[0].value;
	sendRequest(loginUrl, loginModel);
});

$('#signUpForm').submit(function(event){
	event.preventDefault();
	var signUpUrl = config.origin + config.prefix + config.person;
	var signUpModel = {};
	signUpModel.email = $(this).find('input#email')[0].value;
	signUpModel.password = $(this).find('input#password')[0].value;
	signUpModel.firstName = $(this).find('input#firstname')[0].value;
	signUpModel.secondName = $(this).find('input#secondname')[0].value;
	signUpModel.terms = $(this).find('input#terms')[0].checked;
	signUpModel.role = $(this).find('input[name="role"]:checked')[0].value;
	sendRequest(signUpUrl, signUpModel);

});


function sendRequest(url, model){
	 $.ajax({
	        type: "POST",
	        url: url,
	        data: model,
	        success: function(res){
	        	window.location.href = 'home.html'
	        },
	        error: function(err){
	        	console.log(err);
	        }
	});
}