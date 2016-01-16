
// create a new module called 'yonghuModule' and save 
// a reference to it in a variable called yonghuModule 
var yonghuModule = angular.module('yonghuModule', []);

// use the yonghumodule variable to
// configure the module with a controller
yonghuModule.controller('createyonghuCtrl', function($scope) {
	var yonghu = {
            denglu: 'admin',            
            xianshi: 'admin',
	};
	$scope.data = yonghu;
});
yonghuModule.directive('yonghuList', function ($compile) {
return {
        restrict: 'AE',
        template: "<button ng-click='showHideColors()' type='button'>"
            + "{{isHidden ? 'Show Available Colors' : 'Hide Available Colors'}}"
            + "</button><div ng-hide='isHidden' id='colorContainer'>"
            + "</div>",
        link: function ($scope, $element) {
            // set default state of hide/show
            $scope.isHidden = true;
            // add function to manage hide/show state
            $scope.showHideColors = function () {
                $scope.isHidden = !$scope.isHidden;
            }
      // add colors divs to the document
                var colorContainer = $element.find('div'); angular.forEach($scope.colorsArray, function (color) {
                var appendString = "<div style='background-color:" + color + "'>" + color +   "</"
                colorContainer.append(appendString);
            });
    } 
  };
});
// use the yonghuModule variable to
// configure the module with a filter
yonghuModule.filter('stripDashes', function() {
	return function(txt) {
		// filter code would go here
	};
}); 
// javascript.js
