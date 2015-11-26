guests = [{"name" : "value"},

];

//Main functions

function printStuff(){

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

//TODO: Write to the guestbook itself

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


//...
function getData2 () {

	var input = document.getElementById('form1');
	document.getElementById('testformtext').innerHTML = input;
};

function writeBasic () {
	document.getElementById("testformtext").innerHTML = "testttt";

};