angular.module("myapp", [])
.controller("MyController", function ($scope) {
	$scope.person = {};
	$scope.person.channels = [
		{ value: "television", label: "Television" },
		{ value: "radio", label: "Radio" },
		{ value: "social-media", label: "Social Media"},
		{ value: "other", label: "Other"}
	]; 
});
