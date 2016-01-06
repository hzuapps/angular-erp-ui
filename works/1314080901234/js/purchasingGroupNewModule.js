// create a new module called 'purchasingGroupNewModule' and save 
// a reference to it in a variable called purchasingGroupNewModule 
var purchasingGroupNewModule = angular.module('purchasingGroupNewModule', ['ngRoute']);
purchasingGroupNewModule.config(function ($routeProvider){
  $routeProvider
       .when('/',{
        templateUrl:'pages/home.html'
      })
      .when('/about',{
        templateUrl:'pages/about.html'
      });
});
// use the myAppModule variable to
// configure the module with a controller
purchasingGroupNewModule.factory("purchasingGroupService",function($http){
  var getpurchasingGroupData={};
  getpurchasingGroupData.getData=function(){
      var promise = $http({method: 'GET',url: 'json/purchasingGroup.json'});
      return promise;
  }
  return getpurchasingGroupData;
}).controller('purchasingGroupNewCtrl', function ($scope,purchasingGroupService) {
       // controller code would go here
      var promise=purchasingGroupService.getData();
      promise.success(function(data,status){
        $scope.datas= data.purchasingGroup; 
      });
});

// use the myAppModule variable to
// configure the module with a filter
purchasingGroupNewModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });