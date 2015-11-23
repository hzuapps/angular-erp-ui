promise.error(function (data, status) {
	if (status === 0) {
		$scope.errorMessage = "network or http level issue";
	} else {
		$scope.errorMessage = "response HTTP status is " + status;
	}
    $scope.showErrorMessage = true;
});
