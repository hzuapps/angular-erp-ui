// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var caigoudingdanModule = angular.module('caigoudingdanModule', []);

// use the myAppModule variable to
// configure the module with a controller
caigoudingdanModule.controller('MyFilterDemoCtrl', function ($scope) {
       // controller code would go here
        var someDate={
        Name:'??????????',
        term:'????????',
        caigouData:'2015-10-27',
        jiaohuoData:'2015-10-27',
      };
      $scope.data=someDate;
       $scope.isHidden = true;
        $scope.showInput = function () {
            $scope.isHidden = !$scope.isHidden;
        }
}
);

// use the myAppModule variable to
// configure the module with a filter
caigoudingdanModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
              function myfunction(txt)
{
alert(txt)
}