// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var materialListModule = angular.module('materialListModule', []);

// use the myAppModule variable to
// configure the module with a controller
materialListModule.controller('MyFilterDemoCtrl', function ($http,$scope) {
        $http.get("item.json").success(function(someData){
        $scope.data = someData;
       // controller code would go here
        });
})

// use the myAppModule variable to
// configure the module with a filter
materialListModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
    }; 
});