// create a new module called 'bumenModule' and save 
// a reference to it in a variable called myAppModule 
var bumenModule = angular.module('bumenModule', []);

// use the myAppModule variable to
// configure the module with a controller

bumenModule.factory('bumenService',function($http){
 
       var dataStroe = {};

       dataStroe.doRegistration = function (theData) {
            var promise = $http({method: 'POST',url: 'json/message.json',data: theData});
 
           return promise;
  
      }
 
       return dataStroe;

bumenModule.controller('MyFilter', function ($scope,bumenService) {
    // controller code would go here
        var bumenData = {
            bumenName:'id',
            bumenDaima:'code',
            bumenZhuguan:'inter',
            bumenMiaoshu:'inter'
        };
        $scope.data = bumenData;

$scope.isHidden = true;

        $scope.showInput = function () {

            $scope.isHidden = !$scope.isHidden;

        }

        $scope.bumen = {};

        $scope.register = function () {

            var promise = bumenService.doRegistration($scope.bumen);

            promise.success(function (data, status, headers, config, statusText) {
                $scope.backMess = data.success;

                $scope.isHidden = !$scope.isHidden;

                if(!$scope.isHidden){

                    alert($scope.backMess[0].message + "\n" + "\n" + "Your bumenName is " + $scope.provider.Name);

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
bumenModule.filter('stripDashes',function() {
    return function(txt) {
        // filter code would go here
  };
     });