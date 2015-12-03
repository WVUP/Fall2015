
var storage = {
	get: function (key) {
		var obj = localStorage.getItem(key);
		if(obj)
			obj = JSON.parse(obj);

		return obj;
	},
	set: function (key, value) {
		localStorage.setItem(key, JSON.stringify(value));
	}
};

var users = storage.get('local_users') || [];

// Lets us know when everything is loaded in and ready to go
$(document).ready(function () {
	
	// Capture our register button
	var btnRegister = document.getElementById('btnRegister');

	// Cache off our inputs for later use
	var inpEmail = document.getElementById('email');
	var inpPassword = document.getElementById('password');

	
	btnRegister.addEventListener('click', function (e) {

		e.preventDefault();
		e.stopPropagation();

		var frm = document.getElementById('frm');
		if(frm.checkValidity()){

			var user = {
				email: inpEmail.value,
				password: inpPassword.value
			};

			// Add the registered user to our array
			users.push(user);
			storage.set('local_users', users);


			console.log(user);
			// debugger;

		}else{
			alert('whoah...not so fast');
		}
		
	});

	var btnSubmit = document.getElementById('btnSubmit');
	btnSubmit.addEventListener('click', function (e) {
		e.preventDefault();
		e.stopPropagation();

		var frm = document.getElementById('frm');
		if(frm.checkValidity()){

			// Is this a authenticated user
			var isValid = false;
			for (var i = 0; i < users.length; i++) {
				if(users[i].email == inpEmail.value && users[i].password == inpPassword.value){
					isValid = true;
					break;
				}
			}

			var msg = (isValid) ? "Woohoo, you're legit" : "No bueno";
			alert(msg);

		}else{
			alert('whoah...not so fast');
		}

	});

});