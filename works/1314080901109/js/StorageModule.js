// create a new module called 'StorageModule' and save 
// a reference to it in a variable called StorageModule 

var StorageModule = angular.module('StorageModule', ['ngRoute']);
 
 StorageModule.config(function ($routeStorage) {
     // configure the routes
     $routeStorage
         .when('/', {
             // route for the about page
             templateUrl: 'pages/home.html'
         })
         .when('/home', {
             templateUrl: 'pages/home.html'
         })
         .when('/input', {
             templateUrl: 'pages/input.html',
             controller: 'inputCtrl'
         })
         .when('/about', {
             templateUrl: 'pages/about.html',
             controller: 'aboutCtrl'
         })
         .when('/content', {
             templateUrl: 'pages/content.html',
             controller: 'contentCtrl'
         });
 });



var StorageModule = angular.module('StorageModule', []);
StorageModule.factory('storageService',function($http){
 	    var dataStroe = {};
         dataStroe.doRegistration = function (theData) {
             var promise = $http({method: 'POST',url: 'json/message.json',data: theData});
             return promise;
         }
         return dataStroe;
     }).controller('MyFilterDemoCtrl', function ($scope,storageService) {
	
// use the StorageModule variable to
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



// use the StorageModule variable to
// configure the module with a filter
StorageModule.filter('Storage stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });



StorageModule.directive("myStorage", function () {
     return {
         restrict: "AE",
         replace: true,
         templateUrl: 'directives/provider.html'
 
     }
 }).directive("myHide", function () {
     return {
         restrict: "AE",
         replace: true,
         templateUrl: 'directives/hide.html'
     }
 }).directive("myNav", function () {
     return {
         restrict: "AE",
         replace: true,
         templateUrl: 'directives/nav.html'
     }
 }).directive("myShow", function () {
     return {
         restrict: "AE",
         replace: true,
         template: '<div id="main"><div ng-view></div></div>'
     }
 });





