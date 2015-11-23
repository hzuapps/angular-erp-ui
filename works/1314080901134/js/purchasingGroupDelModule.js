// create a new module called 'purchasingGroupDelModule' and save 
// a reference to it in a variable called purchasingGroupDelModule 
var purchasingGroupDelModule = angular.module('purchasingGroupDelModule', []);

// use the purchasingGroupDelModule variable to
// configure the module with a controller
purchasingGroupDelModule.controller('purchasingGroupDelCtrl', function ($scope) {
       // controller code would go here
          $scope.isHidden = true;
          $scope.showHideColors = function () {
	      $scope.isHidden = !$scope.isHidden;
	    }
         var purchasingGroup1= { 
             groupName:'小组名',
             groupId:'00002'
        };
         $scope.data = purchasingGroup1; 

    }
);

// use the purchasingGroupDelModule variable to
// configure the module with a filter
purchasingGroupDelModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });