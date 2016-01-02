when('/portfolio', {
    templateUrl: function () {
	// create a number between 1 and 10
	var num = Math.floor((Math.random() * 10) + 1); // use this number to produce a path
	// to one of the ten view templates
	return 'pages/portfolio' + num + '.html';
	},
    controller: 'contactController'
});
