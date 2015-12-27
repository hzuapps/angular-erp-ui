// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var myAppModule = angular.module('myAppModule', []);

// use the myAppModule variable to
// configure the module with a controller
myAppModule.factory("myAppModuleService",function($http){
   var getmyData={};
   getmyData.getData=function(){
      var promise = $http({method: 'GET',url: 'json/myData.json'});
      return promise;
   }
  return getmyData;
 }).controller('myAppModuleCtrl', function ($scope,myAppModuleService){
    var promise = myAppModuleService.getData();
    promise.success(function(data,status){
       $scope.datas = data.typeSet; 
    });
});

// use the myAppModule variable to
// configure the module with a filter
myAppModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
