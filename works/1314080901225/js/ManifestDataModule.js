// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var ManifestDataModule = angular.module('ManifestDataModule', []);

// use the myAppModule variable to
// configure the module with a controller
ManifestDataModule.controller('MyFilterDemoCtrl', function($scope) {
        var ManifestData = {
            	ManifestNum: '001',
            	Wearhouse: '001',
            	Handler: 'Ayden',
            	HandlingData: '2000-10-15',
            	State: ' ',
	    	Remark: ' ',
            
       };
        $scope.data =ManifestData;
});

// use the myAppModule variable to
// configure the module with a filter
ManifestDataModule.filter('stripDashes', function() {
	return function(txt) {
		// filter code would go here
	};
});