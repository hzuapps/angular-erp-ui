
// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var feiyongdanModule = angular.module("feiyongdanModule", ['ngRoute']);
// use the myAppModule variable to
// configure the module with a controller
feiyongdanModule.config(function ($routeProvider) {
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
feiyongdanModule.controller('aboutController', function ($scope) {
      $scope.title = ' ID 1314080901226';
    });
feiyongdanModule.controller('homeController', function ($http,$scope) {
       // controller code would go here
       $http.get("feiyongdan_JSON.txt").success(function(someData){
        $scope.data=someData;
       });
     })

// use the myAppModule variable to
// configure the module with a filter
feiyongdanModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
