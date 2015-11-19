$(document).on('ready', function(){

	$('#fetch').click(function () {
		console.log('Starting Fetch');
		$.ajax({
			url: 'https://raw.githubusercontent.com/WVUP/Fall2015/master/samples/jQuery/users.json',
			type: 'GET',
			success: function (resp) {
				console.log('Call Successful');
				var person = JSON.parse(resp);
				console.log(person);
				debugger;
			},
			error: function (err) {
				console.log('Errror :(');
				console.log(err);
			},
			finally: function () {
				console.log('finally');
			}
			
		});

	});

	$('#btn_alert').on('click', function (milkAndCookies) {
		console.log(milkAndCookies);
		console.log(arguments);
		console.log('Using the "on" handler');
	});
	
	$('#btn_alert')
		.click(function () {
			console.log('Using the "click" handler');
		})
		.css('font-size', '2em');

	document.getElementById('btn_alert').addEventListener('click', function () {
		console.log('Vanilla JS by ID');
	});

	var btn_alert = document.querySelector('#btn_alert');
	btn_alert.addEventListener('click', function (ev) {
		console.log('Vanilla JS by query selector');
		console.log(ev);

		animateRight(btn_alert);
	});
	btn_alert.style.fontSize = '3em';


	function animateRight (el) {
		var timeInterval = 2000;
		var numOfTimes = 5;
		var distance = 50;
		var left = 0;

		var _time = setInterval(function () {
			left += distance;
			el.style.marginLeft = left + 'px';

			console.log('left: ' + left);
			
			if(left > 550)
				window.clearInterval(_time);

		}, timeInterval);
	}
});

