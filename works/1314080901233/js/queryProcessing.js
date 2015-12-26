// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var queryProcessing = angular.module('queryProcessing',['ngRoute']);

// use the myAppModule variable to
// configure the module with a controller
queryProcessing.config(function ($routeProvider) {
      // configure the routes
    $routeProvider
    .when('/home', {
      // route for the home page
        templateUrl: 'home.html',
        controller: 'queryProcessingCtrl'
    })
    .when('/about', {
      // route for the about page
        templateUrl:'about.html',
        controller:'aboutController'
    });
});

queryProcessing.controller('aboutController', function ($scope) {
       alert("温仕添-学号：1314080901233")
    });

queryProcessing.controller('queryProcessingCtrl', function ($http,$scope) {
       // controller code would go here

        $http.get("data.txt").success(function(someData){
            $scope.data1=someData;});
    }
);

// use the myAppModule variable to
// configure the module with a filter
queryProcessing.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
