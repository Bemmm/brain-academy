var prod = [{
	id: 0,
	name: "iphone",
	cost: 200,
	url: "https://support.apple.com/content/dam/edam/applecare/images/en_US/iphone/featured-content-iphone-transfer-content-ios10_2x.png"
},
{
	id: 1,
	name: "samsung",
	cost: 100,
	url: "https://support.apple.com/content/dam/edam/applecare/images/en_US/iphone/featured-content-iphone-transfer-content-ios10_2x.png"
},
{
	id: 2,
	name: "htc",
	cost: 100,
	url: "https://support.apple.com/content/dam/edam/applecare/images/en_US/iphone/featured-content-iphone-transfer-content-ios10_2x.png"
}];

var basket = {
	items: [],
	sum: 0,
	countPrice: function(){
		this.sum = 0;
		for(var i=0;i<this.items.length;i++){
			this.sum += this.items[i].cost;

		}
		console.log(basket);
		var sum = document.getElementById('sum');
		sum.innerHTML = this.sum;

	},
	outputProd: function(item){
		console.log(item);
		var div = document.getElementById('basket');
		var hi = document.createElement('h1');
		var span = document.createElement('span');
		hi.innerHTML = item.name;
		span.innerHTML = " " + item.cost;
		hi.appendChild(span);
		div.appendChild(hi);
	}
};

function initProd(products){
	for(var i = 0; i<products.length; i++){
		var body = document.getElementById('prodList');
		var hi = document.createElement('h1');
		var pi = document.createElement('p');
		var div = document.createElement('div');
		var img = document.createElement('img');
		var button = document.createElement('button');
		button.onclick = function(){
			var clickedItemId = this.parentNode.id;
			basket.items.push(products[clickedItemId]);
			basket.countPrice();
			basket.outputProd(products[clickedItemId]);

		};
		div.appendChild(button);
		div.id=products[i].id;

		img.setAttribute("src", products[i].url);
		img.setAttribute("class", "size");
		div.appendChild(img);


		hi.innerHTML = products[i].name;
		div.appendChild(hi);

		pi.innerHTML = products[i].cost;
		div.appendChild(pi);

		body.appendChild(div);





	}
}

initProd(prod);