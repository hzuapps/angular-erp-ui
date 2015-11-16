
// create a new module called 'banjianModule' and save 
// a reference to it in a variable called banjianModule 
var banjianModule = angular.module('banjianModule', []);

// use the banjianmodule variable to
// configure the module with a controller
banjianModule.controller('createbanjianCtrl', function($scope) {
	var BOMmessage = {
	          ceban: '侧板',
            cengban: '层板',
            menban: '门板',
            beiban: '背板',            
            mupi: '木皮',
	};
	$scope.data = BOMmessage;
});
banjianModule.directive('banjianList', function ($compile) {
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
// use the banjianModule variable to
// configure the module with a filter
banjianModule.filter('stripDashes', function() {
	return function(txt) {
		// filter code would go here
	};
}); 
// javascript.js
