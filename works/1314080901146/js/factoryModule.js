
// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var factoryModule = angular.module('factoryModule', []);

// use the myAppModule variable to
// configure the module with a controller
factoryModule.controller('MyFilterDemoCtrl', function ($scope) {
       // controller code would go here
	var factoryData = {
            factoryName: 'kaixin',
            factoryNum:  '001',
			factoryLocation: 'GuangDong',
			factoryDescription: '信誉良好',
        };
        $scope.data = factoryData;
		$scope.isHidden = true;
        $scope.showInput = function () 
		{
            $scope.isHidden = !$scope.isHidden;
        }
}
);

// use the myAppModule variable to
// configure the module with a filter
factoryModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });