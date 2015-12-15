// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var myAppModule = angular.module('myAPPModule', []);
myAppModule.factory('myAppService',function($http){
 	    var dataStroe = {};
         dataStroe.doRegistration = function (theData) {
             var promise = $http({method: 'POST',url: 'json/message.json',data: theData});
             return promise;
         }
         return dataStroe;
     }).controller('MyFilterDemoCtrl', function ($scope,myAppService) {
	
// use the myAppModule variable to
// configure the module with a controller

        var DanjumingxiData = {
            XUHAO: '01',
            BIANMA: '1008611',
            LEIBIE: 'watch',
            NAME: 'SEIKO',
            XINGHAO: '1008612'
            DANWEI: '100',
            SHULIANG: '1000',
            SHOUHUOSHULIANG: '998',
            BEIZHU: 'NOTHING',
        
        };
        $scope.data = DanjumingxiData;
       // controller code would go here
      $scope.isHidden = true;
      $scope.showHideColors = function () {
           $scope.isHidden = !$scope.isHidden;
    }

        $scope.provider = {};
          $scope.register = function () {
             var promise = providerService.doRegistration($scope.provider);
                promise.success(function (data, status, headers, config, statusText) {
                   $scope.backMess = data.success;
                        $scope.isHidden = !$scope.isHidden;
        
        if(!$scope.isHidden){
                   alert($scope.backMess[0].message + "\n" + "\n" + "ÄãµÄ²Ö¿âµ¥ºÅÊÇ£º " + $scope.Pno);
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
myAppModule.filter('mystripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });