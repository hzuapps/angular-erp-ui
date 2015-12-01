// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var myAppModule = angular.module('myAppModule', []);

// use the myAppModule variable to
// configure the module with a controller
myAppModule.controller('someData', function ($scope)
	{
		var someData= 
			{ 
			 dep: '所属部门',
           		  quartersName:'岗位名称',
            		quartersLay:'岗位层次',
           	  	 quartersType:'岗位类型',
           		 salary:'基本薪资',
           		 quartersDuty:'岗位职责',
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
