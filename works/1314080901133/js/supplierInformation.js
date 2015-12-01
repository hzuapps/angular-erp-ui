// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var myAppModule = angular.module('supplierInformationModule', []);

// use the myAppModule variable to
// configure the module with a controller
myAppModule.controller('MyFilterDemoCtrl', function ($scope) {
	var someData = {
            no.: '001',
            name: 'xidada',
            code: '110120119',
            photo: '20151020.jpg',
            createTime: '2015-10-20'
        };
        $scope.data = someData;
       // controller code would go here
    }
);

// use the myAppModule variable to
// configure the module with a filter
myAppModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });