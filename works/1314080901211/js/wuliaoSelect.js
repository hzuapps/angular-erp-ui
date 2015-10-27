    // create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var wuliaoSelect = angular.module('wuliaoSelect', []);

// use the myAppModule variable to
// configure the module with a controller
wuliaoSelect.controller('wuliaoSelectCtrl', function ($scope) {
       // controller code would go here
        var someData = {
            name: 'ee',
            type: '五金',
            version:'L',
            dateJoined: new Date(2015, 10, 23),
            color:'black',
            description:'balabala',
        };
        $scope.data = someData;
    }
);

// use the myAppModule variable to
// configure the module with a filter
myAppModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });