angular.module("myapp", [])
.controller("MyController", function ($scope) {
	$scope.showFirstName = function(){ 
		alert("Name is: " + $scope.firstName);
	} 
});
