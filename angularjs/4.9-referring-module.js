// Create a new module 
angular.module('myAppModule', []);

// configure the module with a controller 
angular.module('myAppModule').controller('MyFilterDemoCtrl', function ($scope) {
        // controller code would go here
    }
);

// configure the module with a filter 
angular.module('myAppModule'). filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
