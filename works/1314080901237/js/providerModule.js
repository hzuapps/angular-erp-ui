// create a new module called 'salesIncomeModule' and save 
// a reference to it in a variable called salesIncomeModule 
var providerModule = angular.module('providerModule', []);

// use the salesIncomeModule variable to
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
            UnitName: ' ',
            CollectMode: ' ',
            CollectDay: 123,
            jingshouren: ' ',
            shoukuanyue: 123,
            shoukuanzhanghu:123,
            yinhangzhnanghu:123,
            zhuangtai:' ',
            hexiaoyue:123,
            beizhu:' '
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
// use the salesIncomeModule variable to
// configure the module with a filter
salesIncomeModule.filter('stripDashes', function () {
    return function (txt) {
        // filter code would go here
    };
});// javascript.js 
