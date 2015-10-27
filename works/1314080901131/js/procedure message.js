// create a new module called 'procedure message' and save 
// a reference to it in a variable called procedure message 
var procedure message = angular.module('procedure message', []);

// use the procedure message variable to
// configure the module with a controller
procedure message.controller('MyFilterDemoCtrl', function ($scope) {
       // controller code would go here
    }
);

// use the procedure message variable to
// configure the module with a filter
procedure message.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
