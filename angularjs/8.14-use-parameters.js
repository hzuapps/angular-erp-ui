app.controller('contactController', function ($scope, $routeParams) {
	var subject = '';
	if ($routeParams ['subject'] == "learn") {
		subject = 'I want to learn more about your services'; 
	} else if ($routeParams ['subject'] == "quote") {
		subject = 'I would like to get a free quote';
	}
	$scope.subject = subject;
});
        