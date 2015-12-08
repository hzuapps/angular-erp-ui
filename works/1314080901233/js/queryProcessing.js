// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var queryProcessing = angular.module('queryProcessing', []);

// use the myAppModule variable to
// configure the module with a controller
queryProcessing.controller('queryProcessingCtrl', function ($scope) {
       // controller code would go here
        $scope.someData=[
        {name:'w',operation:'改了a',status:'已审核'},
        {name:'s',operation:'改了b',status:'待审核'},
        {name:'t',operation:'改了c',status:'待审核'}        
        ]
    }
);

// use the myAppModule variable to
// configure the module with a filter
queryProcessing.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
