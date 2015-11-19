function renderStudents (students) {
	var container = document.getElementById('student_list');
	var html = '';
	for (var i = 0; i < students.length; i++) {
		html += students[i].firstName + ' ' + students[i].lastName + ' <br />';
	}
	container.innerHTML = html;
}

function getWarranty () {
	var container = document.getElementById('warranty');
	$.ajax({
			url: 'https://raw.githubusercontent.com/WVUP/Fall2015/master/samples/jQuery/warranty.html',
			type: 'GET',
			success: function (resp) {
				container.innerHTML = resp;

				$('#soWhat').click(function () {
					alert('get over it');
				});
				
			},
			error: function (err) {
				console.log('Errror :(');
				console.log(err);
			},
			finally: function () {
				console.log('finally');
			}
			
		});
}

$(document).on('ready', function(){



	$('#fetch').click(function () {
		console.log('Starting Fetch');
		$.ajax({
			url: 'https://raw.githubusercontent.com/WVUP/Fall2015/master/samples/jQuery/users.json',
			type: 'GET',
			dataType: "json",
			success: function (students) {
				console.log('Call Successful');
				console.log(students);
				renderStudents(students);

				getWarranty();
				
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

