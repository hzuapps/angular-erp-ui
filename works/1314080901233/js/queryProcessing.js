// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var queryProcessing = angular.module('queryProcessing', []);

// use the myAppModule variable to
// configure the module with a controller
queryProcessing.controller('queryProcessingCtrl', function ($scope) {
       // controller code would go here
        var someData = {
            name: 'a',
            operation: '无',
            status:'待审核'
        };
        $scope.data = someData;
    }
);

// use the myAppModule variable to
// configure the module with a filter
queryProcessing.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
