// If the registration form is valid, use the
// memberDataStoreService to submit the form data
if ($scope.registrationForm.$valid) {
    $scope.working = true;
    var promise = memberDataStoreService.doRegistration($scope.person);
    promise.success(function (data, status) {
        $scope.showSuccessMessage = true;
});
    promise.error(function (data, status) {
        $scope.showErrorMessage = true;
});
    promise.finally(function () {
        $scope.working = false;
});
    $scope.doShow = true;
}
