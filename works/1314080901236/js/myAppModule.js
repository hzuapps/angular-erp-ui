// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var myAppModule = angular.module('myAppModule', []);

// use the myAppModule variable to
// configure the module with a controller
myAppModule.controller('SuppInfor', function ($scope)
	{
	     function SuppInfor($scope) {
			var SuppInfor= {
			    SuppId: '001',
			    CreatDate: new Date(2015, 10, 18),
			    SuppType: '五金类',
			    SuppFullName: '供应商全称',
			    pinyincode: 'null'
			    SuppPage: 'http://'
			    SuppShortName:'供应商简称'
			    AdministrativeDivision :'行政区域'
			    SuppDesc :'供应商简介'
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
