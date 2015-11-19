$(document).on('ready', function(){

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

