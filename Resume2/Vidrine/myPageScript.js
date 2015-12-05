function getAboutMe () {
	var container = document.getElementById('about');
	$.ajax({
		url: 'https://raw.githubusercontent.com/WVUP/Fall2015/master/resume2/Vidrine/about.html',
		type: 'GET',
		success: function (resp) {
			container.innerHTML = resp
		}
	})

}


$(document).on( 'ready', function () {
	$('#about').on( 'click', function () {
		var dialog = bootbox.alert('<div style="font-size:200%;"><i class="fa fa-refresh fa-spin"></i> Loading data</div>');
		getAboutMe()
	});
});