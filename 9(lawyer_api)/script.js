
var config = {
	origin: 'http://31.131.22.106',
	prefix: '/api',
	login: '/login',
	person: '/person',
	parentCategories: '/parent-categories',
	lawyers: '/person/idnull',
	orders: '/order/page='
};
$(document).ready(function(){
	currentPage = 1;
	sendRequest(config.origin+config.prefix+config.parentCategories, 'GET');
	sendRequest(config.origin+config.prefix+config.lawyers, 'GET');
	sendRequest(config.origin+config.prefix+config.orders + currentPage, 'GET');
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

function outputCategories(categories){
	var list = $('#categories ul');
	for(i=0;i<categories.length; i++){
		list.append('<li>'+ categories[i].name +'</li>')
	}
};

function outputLawyers(lawyers){
	var list = $('#lawyers ul');
	for(i=0;i<lawyers.length; i++){
		list.append('<li> <img src="' + config.origin + lawyers[i].photo + '">'+ lawyers[i].name.firstName +'</li>')
	}
};
function outputOrders(orders){
	var colors = ['red', 'blue', 'green'];
	var list = $('#orders');
	for(i=0;i<orders.length; i++){
		var rand = colors[Math.floor(Math.random() * colors.length)];
		list.append('<div style="background:' + rand +'"><h1>' + orders[i].categoryName + '</h1>' + orders[i].description + '</div>');
	}
}

function sendRequest(url, method, model){
	 $.ajax({
	        type: method,
	        url: url,
	        data: model,
	        success: function(res){
	        	switch(url){
	        		case config.origin + config.prefix+ config.parentCategories:
		        		outputCategories(res);
	        		break;
	        		case config.origin + config.prefix+ config.lawyers:
		        		outputLawyers(res);
	        		break;
	        		case config.origin + config.prefix+ config.orders + currentPage:
		        		outputOrders(res.orders);
	        		break;
	        	}
	        },
	        error: function(err){
	        	console.log(err);
	        }
	});
}