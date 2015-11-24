$scope.showFirstName = function(){ 
	if(angular.isDefined($scope.firstName)){ 
		alert("Name is: " + $scope.firstName);
	} else {
		alert("Name is empty, please enter a value");
	} 
}
