


var games = [

	{
		genre: 'shooter',
		name: 'halo 5',
		price: 60,
		multiplayer: true,
		img: 'https://upload.wikimedia.org/wikipedia/en/6/68/Halo_Guardians.png'
	},

	{
		genre: 'shooter',
		name: 'cod 3',
		price: 60,
		img: 'http://cdn.wccftech.com/wp-content/uploads/2015/06/Call-of-Duty-Black-Ops-3.png'
	}

];

/**
 * Builds out the html to display game list
 * @return {string} Our actual HTML
 */
function buildHTML (genre) {
	
	var html = '';

	for (var i = 0; i < games.length; i++) {

		if(genre && genre != games[i].genre)
			continue;

		html +=
			'<div class="col-sm-3">' +
				'<img onClick="removeTitle(' + i + ')" src="' + games[i].img + '" alt="' + games[i].name + '" style="width:100%;" />' +
				'<div class="text-center" style="font-size: 130%;">' + games[i].name + '</div>' +
				'<div class="text-danger"> $' + games[i].price + '</div>' +
			'</div>';
	}

	return html;


}

function renderGames (genre) {
	var game_panel = document.getElementById('updateMe');


	var content = buildHTML(genre);

	game_panel.innerHTML = content;

}

function filter (genre) {
	renderGames(genre);
}

function removeTitle (index) {
	games.splice(index, 1);
	renderGames();
}

function addGame () {
	var gameTitle = {
		name: 'LoL',
		price: 0,
		genre: 'online',
		multiplayer: true,
		img: 'http://vignette1.wikia.nocookie.net/leagueoflegends/images/1/12/League_of_Legends_Icon.png/revision/latest?cb=20150402234343'
	};

	games.unshift(gameTitle);

	renderGames();
}

jQuery(document).on('ready', function(){

	renderGames();
});
