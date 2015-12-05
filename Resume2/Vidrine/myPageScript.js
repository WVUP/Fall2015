function getAboutMe () {
	var container = document.getElementById('displayArea');
	$.ajax({
		url: 'https://raw.githubusercontent.com/WVUP/Fall2015/master/Resume2/Vidrine/about.html',
		type: 'GET',
		success: function (resp) {
			container.innerHTML = resp
		}
	})

}


$(document).on( 'ready', function () {
	$('#about').on( 'click', function () {
		getAboutMe()
		alert("Fudge Yeah, I'm a mac genius yo.....but na really im a nub tho")
	});
	
});