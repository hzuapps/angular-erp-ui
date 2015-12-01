// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var orderModule = angular.module('orderModule', []);

// use the myAppModule variable to
// configure the module with a controller
orderModule.controller('createOrderCtrl', function($scope) {
	var paymentDetails = {
		feiyongleixing : '',
		baozhangdanwei: '',
		baozhangren : '',
		baozhangriqi : '',
		baozhangjine : '',
		shifujine: '',
		zhuangtai:'',
		beizhu:'',
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