// Create the module
angular.module('myAppModule', []);
// configure the module with a controller
angular.module('myAppModule').controller('myProductDetailCtrl', function ($scope) {
    // Hide colors by default
    $scope.isHidden = true;
    // a function, placed into the scope, which
	// can toggle the value of the isHidden variable
	$scope.showHideColors = function () {
	    $scope.isHidden = !$scope.isHidden;
	}
} );
