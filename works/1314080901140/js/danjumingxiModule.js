// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var danjumingxiModule = angular.module('danjumingxiModule', []);

// use the myAppModule variable to
// configure the module with a controller
danjumingxiModule.controller('MyFilterDemoCtrl', function ($scope) {
       // controller code would go here
       var someData = {
             No: '001',
             code: 'xidada',
             name: '110120119',
             model: 'MX5',
             specifications:'100*100*100',
             unit:'件',
             number: 100
        };
        $scope.data = someData;
    }
);

// use the myAppModule variable to
// configure the module with a filter
danjumingxiModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
