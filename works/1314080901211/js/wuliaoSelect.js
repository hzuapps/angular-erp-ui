    // create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var wuliaoSelect = angular.module('wuliaoSelect', []);

// use the myAppModule variable to
// configure the module with a controller

wuliaoSelect.controller('wuliaoSelectCtrl', function ($http,$scope) {
       // controller code would go here
       $http.get("materialList_JSON.txt").success(function(someData){
        $scope.data=someData;
       });
     })


// use the myAppModule variable to
// configure the module with a filter
wuliaoSelect.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });