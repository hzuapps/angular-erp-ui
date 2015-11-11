myAppModule.directive('colorList', function () {
	return {
	        restrict: 'AE',
	        template:
	              "<button ng-click='showHideColors()' type='button'>"
	            + "{{isHidden ? 'Show Available Colors' : 'Hide Available Colors'}}"
	            + "</button><div ng-hide='isHidden' id='colorContainer'>"
	            + "</div>"
	} 
});
