
// create a new module called 'BOMmessageModule' and save 
// a reference to it in a variable called BOMmessageModule 
var BOMmessageModule = angular.module('BOMmessageModule', []);

// use the BOMmessageModule variable to
// configure the module with a controller
BOMmessageModule.controller('createBOMmessageCtrl', function($scope) {
	var BOMmessage = {
	        dingdan: '某某公司装修工程',
          chanping: '楼层装饰',
          data1: '2015.9.1',
          data2: '2015.9.31',
          status: 'zhuangxiuzhong',
          caidanyuan: '小张',
          beizhu: '无'
	};
	$scope.data = BOMmessage;
});
BOMmessageModule.directive('gongchengList', function ($compile) {
return {
        restrict: 'AE',
        template: "<button ng-click='showHideColors()' type='button'>"
            + "{{isHidden ? 'Show Available Colors' : 'Hide Available Colors'}}"
            + "</button><div ng-hide='isHidden' id='colorContainer'>"
            + "</div>"
            +"<div>"
            + "{{data.data1}}</div>",
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
// use the BOMmessageModule variable to
// configure the module with a filter
BOMmessageModule.filter('stripDashes', function() {
	return function(txt) {
		// filter code would go here
	};
}); 
// javascript.js
