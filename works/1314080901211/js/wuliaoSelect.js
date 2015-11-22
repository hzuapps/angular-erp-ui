    // create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var wuliaoSelect = angular.module('wuliaoSelect', []);

// use the myAppModule variable to
// configure the module with a controller
wuliaoSelect.controller('wuliaoSelectCtrl', function ($scope) {
       // controller code would go here
        $scope.someData = [
           { name: 'aa',type: '五金',version:'L',color:'black', description:'balabala'},
           { name: 'bb',type: '五金',version:'L',color:'black', description:'balabala'},
           { name: 'cc',type: '五金',version:'L',color:'black', description:'balabala'}
           ];
    }
);

// use the myAppModule variable to
// configure the module with a filter
wuliaoSelect.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });