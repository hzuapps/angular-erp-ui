// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var providerModule = angular.module('providerModule', []);

// use the myAppModule variable to
// configure the module with a controller
providerModule.factory('providerService',function($http){
        var dataStroe = {};
        dataStroe.doRegistration = function (theData) {
            var promise = $http({method: 'POST',url: 'json/message.json',data: theData});
            return promise;
        }
        return dataStroe;
    }).controller('MyFilter', function ($scope,providerService) {
       // controller code would go here
        var providerData = {
            providerNum: '001',
            providerFullName: 'intel',
            providerSimpName: 'intel',
            providerType: 'computer',
            providerIntroduce: 'fashionable product',
            address: 'China'
        };
        $scope.data = providerData;
        $scope.isHidden = true;
        $scope.showInput = function () {
            $scope.isHidden = !$scope.isHidden;
        }
        $scope.provider = {};
        $scope.register = function () {
            var promise = providerService.doRegistration($scope.provider);
            promise.success(function (data, status, headers, config, statusText) {
                $scope.backMess = data.success;
                $scope.isHidden = !$scope.isHidden;
                if(!$scope.isHidden){
                    alert($scope.backMess[0].message + "\n" + "\n" + "Your providerId is " + $scope.provider.Id);
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
providerModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });