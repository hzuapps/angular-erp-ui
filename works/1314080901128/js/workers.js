// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var myAppModule = angular.module('workersModule', []);

// use the myAppModule variable to
// configure the module with a controller
myAppModule.controller('MyFilterDemoCtrl', function ($scope) {
	 var workers = {
            no: '1',
            worker_no:'1',
            name:'chenzhengang',
            sex:'f',
            id_card:'4415210000000000001234',
            address:'gd',
            phone_number:'13888888888',
            post:'manager'
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
