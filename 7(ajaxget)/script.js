$('button').click(function(){
  $.ajax({
     type: "GET",
     url: 'https://jsonplaceholder.typicode.com/users',
     success: function(results){
       outputUsers(results);
     },
     error: function(results){
       console.log("ERROR");
       $("div#results").html(results);
     }
  });
});
function outputUsers(users){
	var usersWrapper = $('#results');
	for(i=0;i<users.length;i++){
		usersWrapper.append('<li>'+ users[i].name +' ' + users[i].email+'</li>');
	};
}