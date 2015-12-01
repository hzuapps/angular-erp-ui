// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var myAppModule = angular.module('myAppModule', []);

// use the myAppModule variable to
// configure the module with a controller
myAppModule.controller('MyFilterDemoCtrl', function ($scope) {
       // controller code would go here
	    var someData = {
           Name: '生产订单-查询生产订单',
    	   interface: '列表',	
		   instructions: '输入条件查询后刷新生产订单列表（树）'	
           dateJoined: new Date(2015, 10, 20),
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
