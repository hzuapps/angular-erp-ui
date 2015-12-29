// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var rejectRequestModule = angular.module('rejectRequestModule', []);

// use the myAppModule variable to
// configure the module with a controller


rejectRequestModule.factory('providerService',function($http){
  var dataSvc={};
  dataSvc.getData=function(theData){
    var promise=$http({method: 'POST',url: 'json/message.json',data: theData});
    return promise;
  }
  return dataSvc;
}).controller("MyFilterDemoCtrl",function($scope,providerService){
          var someData = {
              name: 'storage',
              detailed: 'Increase 100 pieces of goods',
              instructions: 'Approval',
              };
          $scope.data=someData;
          $scope.isHidden=true;
          $scope.showInput = function () {
              $scope.isHidden = !$scope.isHidden;
          }
          $scope.showTextarea = function () {
              $scope.isHidden = !$scope.isHidden;
          }
              
          // $scope.provider={};
          $scope.register=function(){
              var promise=providerService.getData($scope.provider);
              promise.success(function(data,status,headers,config,statusText){
                  $scope.backMess=data.success;
                  $scope.isHidden = !$scope.isHidden;
                  if (!$scope.isHidden) {
                    alert($scope.backMess[0].message+"\n"+"\n"+"The name is "+$scope.name);
                  }
                });
                promise.error(function(data,status,headers,config,statusText){
                    $scope.backMess=data.error;
                    $scope.isHidden = !$scope.isHidden;
                    if (!$scope.isHidden) {
                        alert($scope.backMess[0].message);
                    }
                });
            }
});


rejectRequestModule.filter('stripDashes', function() {
     return function(txt) {
         // filter code would go here
 }; });