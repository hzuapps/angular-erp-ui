// create a new module called 'chaxundanModule' & save 
	// a reference to it in a variable called chaxundanModule 
	var chaxundanModule = angular.module('chaxundanModule', []);
	
	// use the chaxundanModule variable to
	// configure the module with a controller
	chaxundanModule.controller('MyFilterDemoCtrl', function ($scope) {
	       // controller code would go here
	     var chaxundanData = {
	         Unit name:'wwx',
	         Payment method:'支付宝',
	         Payment date:'2015-10-20',
	         Middle man:'wwx',
	         Payment amount:'wwx',
	         Payment account:'wwx',
	         Bank account:'wwx',
	         State:'wwx',
	       };
	         $scope.data = chaxundanData;
                 $scope.isHidden = true;
                 $scope.showInput = function () {
                      $scope.isHidden = !$scope.isHidden;
        }
}
);
	
	// use the chaxundanModule variable to
	// configure the module with a filter
	chaxundanModule.filter('stripDashes', function() {
	    return function(txt) {
	        // filter code would go here
	}; });

