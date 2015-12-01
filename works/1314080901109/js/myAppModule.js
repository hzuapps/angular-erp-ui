// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var myAppModule = angular.module('myAppModule', []);

// use the myAppModule variable to
// configure the module with a controller
myAppModule.controller('myFilterDemoCtrl', function ($scope) {
	
        var Danjumingxi = {
            XUHAO: '01',
            BIANMA: '1008611',
            LEIBIE: 'watch',
            NAME: 'SEIKO,
            XINGHAO: '1008612'
            DANWEI: '100',
            SHULIANG: '1000',
            SHOUHUOSHULIANG: '998',
            BEIZHU: 'NOTHING',
        
        };
        $scope.data = someData;
       // controller code would go here
    }
);

// use the myAppModule variable to
// configure the module with a filter
myAppModule.filter('mytripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });