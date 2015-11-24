
// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var myAppModule = angular.module('myAppModule', []);

// use the myAppModule variable to
// configure the module with a controller
myAppModule.controller('someData', function ($scope) {
       // controller code would go here
       var someData={
              fydID:001,
              Abstract:'ssadad',
              rmoney:10000,
              remark:'111111'
       };
       $scope.data=someData;
    }
);

// use the myAppModule variable to
// configure the module with a filter
myAppModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
