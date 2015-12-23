<<<<<<< HEAD
var procedureModule = angular.module('procedureModule', ['ngRoute']);

procedureModule.config(function ($routeProvider) {
    // configure the routes
    $routeProvider
        .when('/', {
            // route for the about page
            templateUrl: 'pages/Project.html'
        })
        .when('/Project', {
            templateUrl: 'pages/Project.html'
        })
        .when('/Home', {
            templateUrl: 'pages/Home.html',
            controller: 'procedureModuleDemoCtrl'
        })
        .when('/About', {
            templateUrl: 'pages/About.html'
        });       
});
=======
<<<<<<< HEAD
var procedureModule = angular.module('procedureModule', []);
=======
// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 

var procedureModule = angular.module('procedureModule', []);
// use the myAppModule variable to
// configure the module with a controller
procedureModule.controller('procedureModuleDemoCtrl', function ($scope) {
       // controller code would go here
        var procedureData = 
          {   
            procedureID: '001',      
            procedureName: 'test',
            procedureOperation: 'execute',
            procedureCondition: 'Loading'           
           };
        $scope.data = procedureData;
}
);
>>>>>>> origin/master
>>>>>>> origin/master

procedureModule.factory('procedureModuleService',function($http){
     var procedureData={};
     procedureData.getData=function(){
            var promise=$http({
              url:"json/Database.json",
              method:"GET"
            });
            return promise;
      }
      return procedureData;
}).controller('procedureModuleDemoCtrl',function($scope,procedureModuleService){
  var promise=procedureModuleService.getData();
          promise.success(function(data,status, headers, config, statusText){
          $scope.theOrderDatas = data.ProcessData;
           });
     promise.error(function(data,status){
           alert(status);
           alert("请求出现错误！");
     });
});
PaymentDetailsModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });