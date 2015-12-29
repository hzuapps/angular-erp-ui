angular.module("myapp", [])
.controller("MyController", function ($scope) {
	var person = {
		firstName:"Jimmy",
		age: 21,
		address:{
			street: '16 Somewhere Drive',
			suburb: 'Port Kennedy',
			state:  'Western Australia'
		} 
	}
  $scope.person = person;
});
