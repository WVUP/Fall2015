

var items = [
	{
		name: 'Game Fuel',
		price: 1.59,
		brand: 'Mtn. Dew',
		logo: 'http://www.bevreview.com/wp-content/image_mountaindewgamefuel04.gif'
	},
	{
		name: 'Trackball Mouse',
		price: 35.00,
		brand: 'Logitech'
	}
];

for (var i = 0; i < items.length; i++) {

	if(items[i].price < 10){
		console.log(items[i].name + ' is cheap');
	}else{
		console.log(items[i].name + ' is not being purchased');
	}

	var message = (items[i].price < 10) ? 'is cheap' : 'is NOT cheap';
	console.log(message);

	var logoURL = items[i].logo || 'http://vignette1.wikia.nocookie.net/xrp-yokai-academy/images/2/29/No_available_image.gif/revision/latest?cb=20150804115957';
	console.log(logoURL);
}

function AddItem (obj, callback) {
	items.push(obj);

	if(callback && typeof callback == 'function'){
		callback(items.length);
	}
}

function FindItem (itemName) {
	var foundItem = null;

	for (var i = 0; i < items.length; i++) {
		if(items[i].name.toLowerCase() == itemName.toLowerCase()){
			foundItem = items[i];
			break;
		}
	}

	return foundItem;
}


function Person (fname, lname) {
	this.firstName = fname;
	this.lastName = lname;
	this.full_name = null;
	this.body = document.querySelector('body');

	this.init();
}

Person.prototype = {

	init: function () {
		this.full_name = this.firstName + ' ' + this.lastName;
	},

	getFullName: function () {
		return this.firstName + ' ' + this.lastName;
	},

	render: function () {
		this.body.innerHTML = this.getFullName();
	}
};
