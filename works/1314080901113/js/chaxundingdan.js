// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var chaxundingdanModule = angular.module('chaxundingdan', []);

// use the myAppModule variable to
// configure the module with a controller
chaxundingdanModule.controller('chaxundingdanService', function ($http) {
      var dataStroe = {};
         dataStroe.doRegistration = function (theData) {
             var promise = $http({method: 'POST',url: 'json/message.json',data: theData});
             return promise;
         }
         return dataStroe;
     }).controller('MyFilter', function ($scope,chaxundingdanService) {
        // controller code would go here
         var chaxundingdanData = {
             
         };
         $scope.data = chaxundingdanData;
         $scope.isHidden = true;
         $scope.showInput = function () {
             $scope.isHidden = !$scope.isHidden;
         }
         $scope.chaxundingdan = {};
         $scope.register = function () {
             var promise = chaxundingdanService.doRegistration($scope.chaxundingdan);
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
 chaxundingdanModule.filter('stripDashes', function() {
     return function(txt) {
         // filter code would go here
 }; }); 
