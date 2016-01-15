
// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule
var groupData={FunctionName:11111111,OfficerName:11111111,NewGroName:11111111,WorkShop:11111111,};

var myAppModule = angular.module('myAppModule', ['ngRoute']);
    function theRoute($routeProvider){
      $routeProvider.when("/",{
        templateUrl:"pages/home.html",
        controller:"homeController"
      })
      .when("/about",{
        templateUrl:"pages/about.html",
        controller:"aboutController"
      })
      .otherwise("/contact",{
        templateUrl:"pages/contact.html",
        controller:"contactController"
      });
    }
// use the myAppModule variable to
// configure the module with a controller
myAppModule.controller("homeController",function($scope){
  $scope.message="Welcome to Yashon's home page!"
});
myAppModule.controller("aboutController",function($scope){
  $scope.name="Name:Yashon Cheung";
  $scope.numbers="Numbers:1314080901244";
});
myAppModule.controller("contactController",function($scope){
  $scope.messge="Contact us!";
});
myAppModule

myAppModule.factory('myService',function($http){

  var dataStroe={};

  dataStroe.newdata=function(theData){
    var promise=$http({
      method:'POST',
      url:'json/message.json',
      data:theData
    });

    return promise;

  }
  return dataStroe;

}).controller('MyFilterDemoCtrl', function ($scope,myService) {
       // controller code would go here
      var someData={
        FunctionName:11111111,
        OfficerName:11111111,
        NewGroName:11111111,
        WorkShop:11111111,
      };
      $scope.data=someData;
    }
);

// use the myAppModule variable to
// configure the module with a filter
myAppModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
