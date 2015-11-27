guests = [

	{"fname" : "Patrick", "lname": "Star", "message": "LeedleLeedleLeedle"},

];

//Main functions

function printStuff() {

	document.write("hello2");

}

//Topnav functions

function goToGuestbook () {

	location.href = 'guestbook.html';

};
//Form functions

//Capture and test form data
function giveFormData () {

	var input = document.getElementById('form1');
	var output = "";
	var i;
	for (i = 0; i < input.length; i++){
		output += input.elements[i].value + "</br>";
	}
	//writing wach element to a div on a new line
	console.log(output);
	document.getElementById('testformtext').innerHTML = output;

};



//Get the form data, iterate over it and stringify it into JSON form, 
//then return an object literal.
function giveJSON () {

	var input = document.getElementById('form1');
	var output = "";
	var i;
	output += "{";
	for (i = 0; i < input.length; i++){
		if (i == input.length - 1){
			output += '"' + input.elements[i].name + '"' + ' : ' + '"' + input.elements[i].value + '"';
			break;
		} else
		output += '"' + input.elements[i].name + '"' + ' : ' + '"' + input.elements[i].value + '"' + ' , ';
	};
	output += "}";

	//Logging the function
	console.log(JSON.parse(output));

	//Assigning the object literal
	var JSONobj = JSON.parse(output);


	return JSONobj;

};

//This function redraws the guestbook from the array and 
//adds new entries if they exist.

function refreshGuestbook () {

	var output = "";
	var i = 0;
	output += '<div id="flipbook" class="flipclass">' + 
	  				'<div class="hard coverB">' + 
	  					'<p></br></br></br>Guestbook</br></br></p>' +
	  				'</div>' +  
					'<div class="hard coverB"></div>' +
					'<div class ="pageA">'
	for (i = 0; i < guests.length; i++) {


			output += 	(i + 1) + ') ' + guests[i].fname + ' ' + 
						guests[i].lname + ' said " ' + guests[i].message + 
						'"' + '!</br>';

	}

	output +=	'</div>' +
				'<div class ="pageA"></div>' +
				'<div class="hard coverB"></div>' + 
				'<div class="hard coverB"></div>' + 
				'</div>';


	document.getElementById('testdiv').innerHTML = output;
	//document.getElementById('testdiv').innerHTML = '</br> [o]: ' + guests[0].name;

	jQuery("#flipbook").turn({
		autoCenter: true
	});

};


//...
function getData2 () {

	var input = document.getElementById('form1');
	document.getElementById('testformtext').innerHTML = input;
};

function writeBasic () {
	document.getElementById("testformtext").innerHTML = "testttt";

};