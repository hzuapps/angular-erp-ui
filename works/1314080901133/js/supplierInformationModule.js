// create a new module called 'supplierInformationModule' and save 
// a reference to it in a variable called supplierInformationModule 
var supplierInformationModule = angular.module('supplierInformationModule', ['ngRoute']);

// use the supplierInformationModule variable to
// configure the module with a controller
supplierInformationModule.config(function ($routeProvider) {
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

supplierInformationModule.controller('aboutController', function ($scope) {
       // controller code would go here
       $scope.title = ' 学号1314080901133';
     })

supplierInformationModule.controller('homeController', function ($http,$scope){
       // controller code would go here
        $http.get("supplierInformationList_JSON.txt").success(function(someData){$scope.data=someData;});
     })

// use the supplierInformationModule variable to
// configure the module with a filter
supplierInformationModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
    };
});
	