// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var materialSetModule = angular.module('materialSetModule', []);

// use the myAppModule variable to
// configure the module with a controller
materialSetModule.controller('MyFilterDemoCtrl', function ($scope) {
       // controller code would go here
        var materialSet = {
            typeName:" °å²Ä ",
            typeCode:" bc "
        };
        $scope.data = materialSet;
    }
);

// use the myAppModule variable to
// configure the module with a filter
materialSetModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });