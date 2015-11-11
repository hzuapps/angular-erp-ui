// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var bumenModule = angular.module('bumenModule', []);

// use the myAppModule variable to
// configure the module with a controller
bumenModule.controller('MyFilterDemoCtrl', function ($scope) {
       // controller code would go here
       var bumen = {
            name: '123',
            code: '123',
            workernumber: 3
        };
        $scope.data = bumen;
    }
);

// use the myAppModule variable to
// configure the module with a filter
bumenModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
