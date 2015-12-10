
$(document).on('ready', function () {
	
	$('#about').on( 'click', function () {
	
		var dialog = bootbox.alert('<div style="font-size:200%;"><i class="fa fa-refresh fa-spin"></i> Loading data</div>');

		setTimeout(function () {
			var container = document.getElementById('displayArea')
			$.ajax({
				url: 'https://raw.githubusercontent.com/WVUP/Fall2015/master/Resume2/Vidrine/about.html',
				type: 'GET',
				success: function (resp) {
					container.innerHTML = resp
					document.getElementById('about').className="active";
					document.getElementById('resume').className="poop";
					document.getElementById('demos').className="poop";
					document.getElementById('contact').className="poop";
				},
				error: function (err) {
					console.log("Error")
					console.log(err)
				},
				complete: function () {
					console.log("complete")
					setTimeout(function () {
						dialog.modal('hide');
					}, 100)
				}
			})
		}, 1000)
	});

	$('#resume').on('click', function () {

		var dialog = bootbox.alert('<div style="font-size:200%;"><i class="fa fa-refresh fa-spin"></i> Loading data</div>');
		
		setTimeout(function () {

			var container = document.getElementById('displayArea');

			$.ajax({
				url: 'https://raw.githubusercontent.com/WVUP/Fall2015/master/Resume2/Vidrine/isaacResume.html',
				type: 'GET',
				success: function (response) {
					container.innerHTML = response
					document.getElementById('resume').className="active";
					document.getElementById('about').className="poop";
					document.getElementById('contact').className="poop";
					document.getElementById('demos').className="poop";
				},
				error: function (err) {
					console.log('Error')
					console.log(err)
				},
				complete: function () {
					console.log('complete')
					setTimeout(function () {
						dialog.modal('hide');
					}, 100)
				}
			})

		}, 1000)
	});

	$('#contact').on('click', function () {

		var dialog = bootbox.alert('<div style="font-size:200%;"><i class="fa fa-refresh fa-spin"></i> Loading data</div>');
		
		setTimeout(function () {

			var container = document.getElementById('displayArea');

			$.ajax({
				url: 'https://raw.githubusercontent.com/WVUP/Fall2015/master/Resume2/Vidrine/contact.html',
				type: 'GET',
				success: function (response) {
					container.innerHTML = response
					document.getElementById('contact').className="active";
					document.getElementById('about').className="poop";
					document.getElementById('resume').className="poop";
					document.getElementById('demos').className="poop";
				},
				error: function (err) {
					console.log('Error')
					console.log(err)
				},
				complete: function () {
					console.log('complete')
					setTimeout(function () {
						dialog.modal('hide');
					}, 100)
				}
			})

		}, 1000)
	});

	$('#demos').on('click', function () {

		var dialog = bootbox.alert('<div style="font-size:200%;"><i class="fa fa-refresh fa-spin"></i> Loading data</div>');
		
		setTimeout(function () {

			var container = document.getElementById('displayArea');

			$.ajax({
				url: 'https://raw.githubusercontent.com/WVUP/Fall2015/master/Resume2/Vidrine/demos.html',
				type: 'GET',
				success: function (response) {
					container.innerHTML = response
					document.getElementById('demos').className="active";
					document.getElementById('about').className="poop";
					document.getElementById('resume').className="poop";
					document.getElementById('contact').className="poop";
				},
				error: function (err) {
					console.log('Error')
					console.log(err)
				},
				complete: function () {
					console.log('complete')
					setTimeout(function () {
						dialog.modal('hide');
					}, 100)
				}
			})

		}, 1000)
	})
	
});