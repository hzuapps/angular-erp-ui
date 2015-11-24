// declare a module
var myAppModule = angular.module('myAppModule', []);
myAppModule.controller('myDemoCtrl', function ($scope) {
        $scope.colorsArray = ['red', 'green', 'blue', 'purple', 'olive']
} );
myAppModule.directive('colorList', function ($compile) {
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
                var appendString = "<div style='background-color:" + color + "'>" + color +   "</
                colorContainer.append(appendString);
            });
		} 
	};
});
