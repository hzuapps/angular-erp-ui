// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var myAppModule = angular.module('myAppModule', []);

// use the myAppModule variable to
// configure the module with a controller
myAppModule.controller('MyFilterDemoCtrl', function ($scope) {

        var someData = {
            department: '行政',
            job_name: '岗位',
            job_level: '层次',
            job_type: '类型',
            salary: '5000',
            job_statement:'职责'
        };
        $scope.mydata = someData;

        $scope.isHidden=true;
        $scope.showInput=function(){
            $scope.isHidden=!$scope.isHidden;
        }
        var gangwei = {};
        $scope.register = function () {
            var promise = providerService.doRegistration($scope.gangwei);
            promise.success(function (data, status, headers, config, statusText) {
                $scope.backMess = data.success;
                $scope.isHidden = !$scope.isHidden;
                if(!$scope.isHidden){
                    alert($scope.backMess[0].message + "\n" + "\n" + "Your providerId is " + $scope.gangwei.department);
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
    }
);

myAppModule.factory('providerService',function($http){
    var dataStroe = {};
    dataStroe.doRegistration = function (theData) {
        var promise = $http({
            method: 'POST',
            url: 'json/message.json',
            data: theData});
        return promise;
    }
    return dataStroe;
});

// use the myAppModule variable to
// configure the module with a filter
myAppModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });