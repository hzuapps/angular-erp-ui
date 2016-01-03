 // create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 

var robinModule = angular.module('robinModule', ['ngRoute']);

// use the myAppModule variable to
// configure the module with a controller
robinMoudle.config(function ($routeProvider) {
       // configure the routes
     $routeProvider
     .when('/index', {
     // route for the home page
         templateUrl: 'title.html',
     })
     .when('/home', {
       // route for the home page
         templateUrl: 'home.html',
         controller: 'homeController'
     })
     .when('/about', {
       // route for the about page
         templateUrl:'about.html',
        controller:'aboutController'
     });
});


robinModule.controller('aboutController', function ($scope) {
         $scope.title = ' Ñ§ºÅ1314080901241';
    });
robinModule.controller('homeController', function ($http,$scope) {
$http.get("materialList_JSON.txt").success(function(someData){$scope.data=someData;});
      
    });


// use the myAppModule variable to
// configure the module with a filter
robinModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });