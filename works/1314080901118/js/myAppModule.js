// create a new module called 'myAppModule' & save 
// a reference to it in a variable called myAppModule 
var myAppModule = angular.module('myAppModule', []);

// use the myAppModule variable to
// configure the module with a controller
myAppModule.controller('MyFilterDemoCtrl', function ($scope) {
       // controller code would go here
 {


    $scope.isHidden = true;
    $scope.showHideColors = function () {
    $scope.isHidden = !$scope.isHidden;
    }
        var someData = 
      {
            Pno: 't0001',
            Sort: 'coms',
            Name: '锁存器',
            Size: '74ls273',
            Color: '黑',
            Unit:' ',
            Num:0,
            Other:' '
        };
        $scope.data = someData;
} 
    }
);

// use the myAppModule variable to
// configure the module with a filter
myAppModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
