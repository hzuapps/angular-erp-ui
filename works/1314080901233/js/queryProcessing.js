// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var queryProcessing = angular.module('queryProcessing', []);

// use the myAppModule variable to
// configure the module with a controller
queryProcessing.controller('queryProcessingCtrl', function ($http,$scope) {
       // controller code would go here

        $http.get("data.txt").success(function(someData){
            $scope.data1=someData;});
    }
);

// use the myAppModule variable to
// configure the module with a filter
queryProcessing.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
