// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var AuditQequestFormModule = angular.module('AuditQequestFormModule', []);

// use the myAppModule variable to
// configure the module with a controller
AuditQequestFormModule.controller('MyFilterDemoCtrl', function($scope) {
        var caozuomingxi = { 
             name: 'mingchen', 
             detail: 'mingxi', 
             date: 'PDF', 
             instructions:'pishi', 
         };
        $scope.data =AuditQequestForm;
});

// use the myAppModule variable to
// configure the module with a filter
AuditQequestFormModule.filter('stripDashes', function() {
	return function(txt) {
		// filter code would go here
	};
});