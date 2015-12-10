 // create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var robinModule = angular.module('robinModule', []);

// use the myAppModule variable to
// configure the module with a controller

robinModule.controller('createDemoCtrl', function ($http,$scope) {
       // controller code would go here
       $http.get("bjList_JSON.txt").success(function(someData){
        $scope.data=someData;
       });
     })


// use the myAppModule variable to
// configure the module with a filter
robinModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });