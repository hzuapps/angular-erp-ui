// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var myAppModule = angular.module('myAppModule', []);

// use the myAppModule variable to
// configure the module with a controller
myAppModule.factory('prividerService',function($http){
   var dataSvc={};
   dataSvc.getData=function(theData){
    var promise=$http({method: 'POST',url: 'json/message.json',data: theData});
    return promise;
  }
    return dataSvc;

}).controller('MyFilterDemoCtrl', function ($scope,prividerService) {
       // controller code would go here
       var someData = {
            Orderform: 00000001,
            Productname: 'shanping',
            Customername:'wangmoumou',
            Sealoffmember:'limoumou',
            Orderformrate:70,
            Sealoffdate:new Date(2010, 2, 23),
            Finishdate:new Date(2010, 2, 23)
        };
        $scope.data = someData;
        $scope.isHidden=true;
       $scope.showInput=function(){
        	$scope.isHidden=!$scope.isHidden;
        }
        $scope.register=function(){
              var promise=prividerService.getData($scope.provider);
              promise.success(function(data,status,headers,config,statusText){
                  $scope.backMess=data.success;
                  $scope.isHidden = !$scope.isHidden;
                  if (!$scope.isHidden) {
                    alert($scope.backMess[0].message+"\n");
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

// use the myAppModule variable to
// configure the module with a filter
myAppModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });