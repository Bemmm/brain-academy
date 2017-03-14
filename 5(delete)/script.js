var messages = [
	{
		title: 'First Title',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus molestias, excepturi dolorum autem ea voluptatum nostrum aspernatur suscipit odio enim temporibus aperiam placeat nulla reprehenderit dolor architecto earum nisi eius.'
	},
	{
		title: 'Second Title',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse fugiat, corporis aliquid accusantium quis doloremque libero ex, neque vero voluptatum tempora, eveniet voluptatibus molestiae. Eaque sed minus pariatur laboriosam. Qui.'
	},
	{
		title: 'Third Title',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quod temporibus quasi, odio expedita, veniam possimus quae ratione cumque architecto nemo neque mollitia saepe incidunt quam! Quas deleniti aspernatur est.'
	}
];

var createMessageForm = document.getElementById('createMessageForm');
createMessageForm.onsubmit = createMessage;
loadMessages(messages);
/**
 * [loadMessages appends messages to out html view]
 * @param  {Array<Object>} data [array of all messages]
 * @return {null}
 */
function loadMessages(messages){
	for(i=0; i<messages.length; i++){
		addMessage(messages[i]);
	}
};
function addMessage(messageObject){
		var messagesList = document.getElementById('messagesList');
		messageObject['created'] = dateFormater();
		var messageTemplate =
			'<button onclick="removeElement(this)">x</button>'+
			'<h1>'+ messageObject.title + '</h1>'+
			'<h2>'+ messageObject.created + '</h2>'+
			'<p>' + messageObject.description + '</p>';
		var newDiv = document.createElement('div');
		newDiv.innerHTML = messageTemplate;
		messagesList.appendChild(newDiv);
}
function dateFormater(){
	var date = new Date;
	return date.getDate() +	'/' + (date.getMonth()+1) + '/' + date.getFullYear();
}
function createMessage(event){
	event.preventDefault();
	var inputs = this.getElementsByTagName('input');
	var newMessage = {};
	for(i=0; i<inputs.length; i++){
		var newKey = inputs[i].id;
		var newValue = inputs[i].value;
		newMessage[newKey] = newValue;
		inputs[i].value = '';
	};
	console.log(newMessage);
	addMessage(newMessage);
}
function removeElement(element){
	var messagesList = document.getElementById('messagesList');
	var clickedMessage = element.parentNode;
	messagesList.removeChild(clickedMessage);
}
