

var orderModule = angular.module('orderModule', []);

orderModule.controller('createorderCtrl', function($scope) {
	var order = {
	      
	};
	$scope.data = order;
});
orderModule.directive('orderList', function ($compile) {
return {
        restrict: 'AE',
        template: "<button ng-click='showHideColors()' type='button'>"
            + "{{isHidden ? 'Show Available Colors' : 'Hide Available Colors'}}"
            + "</button><div ng-hide='isHidden' id='colorContainer'>"
            + "</div>",
        link: function ($scope, $element) {
          
            $scope.isHidden = true;
          
            $scope.showHideColors = function () {
                $scope.isHidden = !$scope.isHidden;
            }
    
                var colorContainer = $element.find('div'); angular.forEach($scope.colorsArray, function (color) {
                var appendString = "<div style='background-color:" + color + "'>" + color +   "</"
                colorContainer.append(appendString);
            });
    } 
  };
});

orderModule.filter('stripDashes', function() {
	return function(txt) {
		
	};
}); 

