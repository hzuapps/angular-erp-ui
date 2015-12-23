// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var myAppModule = angular.module('chaxundingdan', []);

// use the myAppModule variable to
// configure the module with a controller
myAppModule.controller('MyFilterDemoCtrl', function ($scope) {
       // controller code would go here
 
         var options = {
            order form state:'new','finish','unfinished','all',
            start time:'2015-11-1',
 		    terminal time:'2015-11-30',
        };
         $scope.data = options;
    }
);

// use the myAppModule variable to
// configure the module with a filter
myAppModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
