
$(document).on('ready', function () {
	
	$('#about').on( 'click', function () {
	
		var dialog = bootbox.alert('<div style="font-size:200%;"><i class="fa fa-refresh fa-spin"></i> Loading data</div>');

		setTimeout(function () {
			var container = document.getElementById('aboutArea')
			$.ajax({
				url: 'https://raw.githubusercontent.com/WVUP/Fall2015/master/Resume2/Vidrine/about.html',
				type: 'GET',
				success: function (resp) {
					container.innerHTML = resp
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

			var container = document.getElementById('aboutArea');

			$.ajax({
				url: 'https://raw.githubusercontent.com/WVUP/Fall2015/master/Resume2/Vidrine/isaacResume.html',
				type: 'GET',
				success: function (response) {
					container.innerHTML = response
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