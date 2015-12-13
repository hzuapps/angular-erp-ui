
// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var factoryModule = angular.module('factoryModule', []);

// use the myAppModule variable to
// configure the module with a controller
factoryModule.factory('factoryService', function ($http) {
	var dataStroe = {};
        dataStroe.doRegistration = function (theData) {
            var promise = $http({method: 'POST',url: 'json/message.json',data: theData});
            return promise;
        }
        return dataStroe;
    }).controller('MyFilter', function ($scope,factoryService) {
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
		$scope.factory = {};
        $scope.register = function () {
            var promise = factoryService.doRegistration($scope.factory);
            promise.success(function (data, status, headers, config, statusText) {
                $scope.backMess = data.success;
                $scope.isHidden = !$scope.isHidden;
                if(!$scope.isHidden){
                    alert($scope.backMess[0].message + "\n" + "\n" + "Your factoryNum is " + $scope.factory.Num);
                }
            });
            promise.error(function (data, status, headers, config, statusText) {
                $scope.backMess = data.error;
                $scope.isHidden = !$scope.isHidden;
                if(!$scope.isHidden){
                    alert($scope.backMess[0].message);
                }
            });
        }
});


// use the myAppModule variable to
// configure the module with a filter
factoryModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });