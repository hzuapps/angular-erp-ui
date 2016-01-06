// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var myAppModule = angular.module('myAppModule', ['ngRoute']);

myAppModule.config(function ($routeProvider){
  $routeProvider
       .when('/',{
         templateUrl:'pages/home.html'
       })
       .when('/home',{
         templateUrl:'pages/home.html'
       })
       .when('/contact',{
         templateUrl:'pages/contact.html',
         controller:'myAppModuleCtrl'
       })
       .when('/about',{
         templateUrl:'pages/about.html',
         controller:'aboutCtrl'
       });
});

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
}).controller('aboutCtrl', function ($scope,myAppModuleService){
    $scope.data = {
      num: '1314080901135'
    };
});

// use the myAppModule variable to
// configure the module with a filter
myAppModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
