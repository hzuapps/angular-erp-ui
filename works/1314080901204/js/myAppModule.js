// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var myAppModule = angular.module('myAppModule', []);

// use the myAppModule variable to
// configure the module with a controller
myAppModule.controller('MyFilterDemoCtrl', function ($scope) {
       // controller code would go here
	    var someData = {
	           productName: 'dengzi',
	    	   productId: 001,	
		   plannedQuantity: 100,
		   num: 100,
		   unit: 'changku',
		   graphPaper: 'dengzi',
		   remark: 'wu'
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
