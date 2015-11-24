// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var myAppModule = angular.module('myAppModule', []);

// use the myAppModule variable to
// configure the module with a controller
	myAppModule.controller('MyFilterDemoCtrl', function ($scope) {
	       // controller code would go here

	    var someData = {
	            category: '安装费',
	            department:'人事',
	            receiverName:'赵日天',
	            costDateString:new Date(2015, 10, 22),
	            total:'666',
	            remark:'cool',
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
