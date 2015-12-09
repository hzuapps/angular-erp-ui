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
              category: '安装费',
              department:'人事',
              receiverName:'赵日天',
              costDateString:new Date(2015, 10, 22),
              total:'666',
              remark:'cool',
              };
          $scope.data=someData;
          $scope.isHidden=true;
          $scope.showInput = function () {
              $scope.isHidden = !$scope.isHidden;
          }
              
          // $scope.provider={};
          $scope.register=function(){
              var promise=providerService.getData($scope.provider);
              promise.success(function(data,status,headers,config,statusText){
                  $scope.backMess=data.success;
                  $scope.isHidden = !$scope.isHidden;
                  if (!$scope.isHidden) {
                    alert($scope.backMess[0].message+"\n"+"\n"+"The receiverName is "+$scope.data.receiverName);
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