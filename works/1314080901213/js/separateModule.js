// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var separateModule = angular.module('separateModule', []);

// use the myAppModule variable to
// configure the module with a controller
separateModule.controller('MyFilterDemoCtrl', function ($scope) {
       // controller code would go here
        var separateDetail = {
            id:'001',
	      productName:'gangjing',
	      clientName:'chen',	 
	    	admin:'admin01',
		access:'20%',    
		beginDate:'2015-10-16',
		finishDate:'2015-10-29',      };
        $scope.data = separateDetail;
    }
);

// use the myAppModule variable to
// configure the module with a filter
separateModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
