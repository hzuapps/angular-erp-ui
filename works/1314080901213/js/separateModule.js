// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var orderModule = angular.module('orderModule', []);

// use the myAppModule variable to
// configure the module with a controller
orderModule.controller('createOrderCtrl', function($scope) {
	var paymentDetails = {
		danjubianhao : '123456789',
		zhaiyao : '采购付款 付款明细',
		yingfujine : '1452154.12',
		gukuanjine : '1452154.12',
		weifujine : '0.00',
		beizhu : '交易完成'
	};
	$scope.data = paymentDetails;
});

// use the myAppModule variable to
// configure the module with a filter
myAppModule.filter('stripDashes', function() {
	return function(txt) {
		// filter code would go here
	};
});