// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var myAppModule = angular.module('myAppModule', []);

// use the myAppModule variable to
// configure the module with a controller
myAppModule.controller('MyFilterDemoCtrl', function ($scope) {
       // controller code would go here
	    var someData = {
           Name: '生产订单-查询生产订单',
    	   interface: '列表',	
		   instructions: '输入条件查询后刷新生产订单列表（树）'	
           
        };
        $scope.data = someData;
    }
);
myAppModule.directive('myappList', function ($compile) {
return {
        restrict: 'AE',
        template: "{{data.instructions}}<input  type='button' value='dddddd'/>"
           ,
      //   link: function ($scope, $element) {
      //       // set default state of hide/show
      //       $scope.isHidden = true;
      //       // add function to manage hide/show state
      //       $scope.showHideColors = function () {
      //           $scope.isHidden = !$scope.isHidden;
      //       }
      // // add colors divs to the document
      //           var colorContainer = $element.find('div'); angular.forEach($scope.colorsArray, function (color) {
      //           var appendString = "<div style='background-color:" + color + "'>" + color +   "</"
      //           colorContainer.append(appendString);
      //       });
    // } 
  };
});

// use the myAppModule variable to
// configure the module with a filter
myAppModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
