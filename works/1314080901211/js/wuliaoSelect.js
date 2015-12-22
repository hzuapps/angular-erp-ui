    // create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var wuliaoSelect = angular.module('wuliaoSelect', ['ngRoute']);

// use the myAppModule variable to
// configure the module with a controller
 wuliaoSelect.config(function ($routeProvider) {
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

wuliaoSelect.controller('aboutController', function ($scope) {
      $scope.title = ' 学号1314080901211';
    });


wuliaoSelect.controller('homeController', function ($http,$scope) {
       // controller code would go here
       $http.get("materialList_JSON.txt").success(function(someData){$scope.data=someData;});
     
    });


// use the myAppModule variable to
// configure the module with a filter
wuliaoSelect.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });