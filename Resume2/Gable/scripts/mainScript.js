var guests = [



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

//Stringify form data

function getData2 () {

	var input = document.getElementById('form1');
	document.getElementById('testformtext').innerHTML = input;
};

function writeBasic () {
	document.getElementById("testformtext").innerHTML = "testttt";

};