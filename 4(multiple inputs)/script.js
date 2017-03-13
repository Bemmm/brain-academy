var inputs = document.getElementsByTagName('input');
for(i=0; i<inputs.length; i++){
var pl = inputs[i].getAttribute('placeholder');
	inputs[i].setAttribute("id", pl);
	inputs[i].addEventListener('keyup', function(event){
		console.log(this.id);
	});
};