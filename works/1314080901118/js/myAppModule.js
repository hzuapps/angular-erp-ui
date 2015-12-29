// create a new module called 'myAppModule' & save 
// a reference to it in a variable called myAppModule 
var myAppModule = angular.module('myAppModule', []);

// use the myAppModule variable to
// configure the module with a controller
myAppModule.factory('providerService', function ($http) 
       // controller code would go here
 {
 var dataStroe = {};
       dataStroe.doRegistration = function (theData) {
            var promise = $http({method: 'POST',url: 'json/message.json',data: theData});
            return promise;
        }
        return dataStroe;
    }).controller('MyFilter', function ($scope,providerService) {

        var PROData = 
      {
            Pno: 't0001',
            Sort: 'coms',
            Name: '锁存器',
            Size: '74ls273',
            Color: '黑',
            Unit:' ',
            Num:0,
            Other:' '
        };
        $scope.data = PROData;
    $scope.isHidden = true;
    $scope.showInput  = function () {
    $scope.isHidden = !$scope.isHidden;
    }


    $scope.provider = {};
        $scope.register = function () {
           var promise = providerService.doRegistration($scope.provider);
            promise.success(function (data, status, headers, config, statusText) {
                $scope.backMess = data.success;
               $scope.isHidden = !$scope.isHidden;
                if(!$scope.isHidden){
                    alert($scope.backMess[0].message + "\n" + "\n" + "你的商品编号是： " + $scope.Pno);
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
myAppModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
    };

});
