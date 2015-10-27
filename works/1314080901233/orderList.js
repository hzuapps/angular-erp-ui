// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var orderList = angular.module('orderModule', []);

// use the myAppModule variable to
// configure the module with a controller
orderList.controller('createOrderCtrl', function($scope) {
	var list_of_my_order = {
		ordernum : '001',
		
		ordername : '物料提交情况'
	};
	$scope.data = list_of_my_order;
});

// use the myAppModule variable to
// configure the module with a filter
myAppModule.filter('stripDashes', function() {
	return function(txt) {
		// filter code would go here
	};
});