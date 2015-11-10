 <!DOCTYPE html>
// create a new module called 'BOMmessageModule' and save 
// a reference to it in a variable called BOMmessageModule 
var BOMmessageModule = angular.module('BOMmessageModule', []);

// use the BOMmessageModule variable to
// configure the module with a controller
orderModule.controller('createBOMmessageCtrl', function($scope) {
	var BOMmessage = {
	  dingdan: '某某公司装修工程',
          chanping: '楼层装饰',
          data1: '2015.9.1',
          data2: '2015.9.31',
          status: '装修中',
          caidanyuan: '小张',
          beizhu: '无',
	};
	$scope.data = BOMmessage;
});

// use the BOMmessageModule variable to
// configure the module with a filter
BOMmessageModule.filter('stripDashes', function() {
	return function(txt) {
		// filter code would go here
	};
}); 
// javascript.js
