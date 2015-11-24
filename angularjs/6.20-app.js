angular.module("myapp", [])
.controller("MyController", function ($scope) {
  $scope.person = {};
  $scope.person.newsletterOptIn = false;
  $scope.person.channels = [
    { value: "television", label: "Television" },
    { value: "radio", label: "Radio" },
    { value: "social-media", label: "Social Media"},
    { value: "other", label: "Other"}
  ];
  $scope.register  = function () {
    $scope.firstNameInvalid = false;
    $scope.lastNameInvalid = false;
    $scope.emailInvalid = false;
    if(!$scope.registrationForm.firstName.$valid){
      $scope.firstNameInvalid = true;
    }
    if(!$scope.registrationForm.lastName.$valid){
      $scope.lastNameInvalid = true;
    }
    if(!$scope.registrationForm.email.$valid){
      $scope.emailInvalid = true;
    }
    if(!$scope.registrationForm.research.$valid){
      $scope.researchInvalid = true;
    }
    if($scope.registrationForm.$valid){
      <!-- pending implementation -->
      $scope.doShow = true;
  } }
});
