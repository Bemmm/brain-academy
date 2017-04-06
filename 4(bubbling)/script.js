var grandParent = document.getElementsByClassName('grandParent')[0];
var parent = document.getElementsByClassName('parent')[0];
var child = document.getElementsByClassName('child')[0];

grandParent.addEventListener('click',function(event){
	console.log('Grandparent click');
	if (event.isTrusted == false) return;
	event.cancelBubble = true;
	console.log('Grandparent click2');

})
parent.addEventListener('click',function(event){
	console.log('Parent click');
})
child.addEventListener('click',function(event){
	event.stopPropagation();
	console.log('Child click1');
	event.stopImmediatePropagation();
})
child.addEventListener('click',function(event){
	console.log('Child click2');
})