// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var NewTypeSetModule = angular.module('NewTypeSetModule', []);

// use the myAppModule variable to
// configure the module with a controller
NewTypeSetModule.controller('MyFilterDemoCtrl', function ($scope) {
       // controller code would go here
       var NewTypeSet = {
            Name: '五金',
            Code: 'wj',
        };
        $scope.data = NewTypeSet;
    	$scope.items = [
            
             {typeName: '钢材',typecode: 'gc'},
             {typeName: '玻璃',typecode: 'bl'},
             ];
    }
);

// use the myAppModule variable to
// configure the module with a filter
NewTypeSetModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });