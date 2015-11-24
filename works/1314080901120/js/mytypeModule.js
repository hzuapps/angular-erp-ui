// create a new module called 'mytypeModule' and save 
// a reference to it in a variable called myAppModule 
var mytypeModule = angular.module('mytypeModule', []);

// use the mytypeModule variable to
// configure the module with a controller
mytypeModule.controller('mytypeCtrl', function ($scope) {
       // controller code would go here
        
        var type = {
            typeName: 'һ',
            
        };
        $scope.data = someData;
} 
);

// use the mytypeModule variable to
// configure the module with a filter
mytypeModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });