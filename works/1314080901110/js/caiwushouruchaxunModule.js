// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var caiwushouruchaxunModule = angular.module('caiwushouruchaxunModule', []);

// use the myAppModule variable to
// configure the module with a controller
caiwushouruchaxunModule.factory('caiwushouruchaxunService',function($http){
        var dataStroe = {};
        dataStroe.doRegistration = function (theData) {
            var promise = $http({method: 'POST',url: 'json/message.json',data: theData});
            return promise;
        }
        return dataStroe;
    }).controller('MyFilter', function ($scope,caiwushouruchaxunService) {
       // controller code would go here
        var caiwushouruchaxunData = {
            
        };
        $scope.data = caiwushouruchaxunData;
        $scope.isHidden = true;
        $scope.showInput = function () {
            $scope.isHidden = !$scope.isHidden;
        }
        $scope.caiwushouruchaxun = {};
        $scope.register = function () {
            var promise = caiwushouruchaxunService.doRegistration($scope.caiwushouruchaxun);
            promise.success(function (data, status, headers, config, statusText) {
                $scope.backMess = data.success;
                $scope.isHidden = !$scope.isHidden;
                if(!$scope.isHidden){
                    alert($scope.backMess[0].message + "\n" + "\n" );
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
caiwushouruchaxunModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });