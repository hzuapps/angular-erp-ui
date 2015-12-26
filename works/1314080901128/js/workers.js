// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var myAppModule = angular.module('workersModule', ['ngRoute']);

// use the myAppModule variable to
// configure the module with a controller

 myAppModule.config(function ($routeProvider) {
      // configure the routes
    $routeProvider
    .when('/name', {
      // route for the home page
        templateUrl: 'title.html'
    })
    .when('/home', {
      // route for the home page
        templateUrl: 'home.html'
    })
    .when('/contact', {
      // route for the home page
        templateUrl: 'contact.html',
        controller: 'contactController'
    })
    .when('/about', {
      // route for the about page
        templateUrl:'about.html'
    });
});





myAppModule.controller('contactController', function ($http,$scope) {
       // controller code would go here
       $http.get("shuju_JSON.json").success(function(someData){$scope.data=someData;});
     
    });


// use the myAppModule variable to
// configure the module with a filter
myAppModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; 
});
