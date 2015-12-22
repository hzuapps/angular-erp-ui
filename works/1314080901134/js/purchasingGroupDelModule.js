// create a new module called 'purchasingGroupDelModule' and save 
// a reference to it in a variable called purchasingGroupDelModule 
var purchasingGroupDelModule = angular.module('purchasingGroupDelModule', ['ngRoute']);
purchasingGroupDelModule.config(function ($routeProvider){
  $routeProvider
      .when('/about',{
        templateUrl:'about.html'
      });
});
// use the purchasingGroupDelModule variable to
// configure the module with a controller
purchasingGroupDelModule.factory("purchasingGroupService",function($http){
  var getpurchasingGroupData={};
  getpurchasingGroupData.getData=function(){
      var promise = $http({method: 'GET',url: 'json/purchasingGroup1.json'});
      return promise;
  }
  return getpurchasingGroupData;
}).controller('purchasingGroupDelCtrl', function ($scope,purchasingGroupService) {
       // controller code would go here
      var promise=purchasingGroupService.getData();
      promise.success(function(data,status){
        $scope.messages = data.purchasingGroup1; 
      });
});

// use the purchasingGroupDelModule variable to
// configure the module with a filter
purchasingGroupDelModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });

