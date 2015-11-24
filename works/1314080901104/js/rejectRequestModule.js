// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var rejectRequestModule = angular.module('rejectRequestModule', []);

// use the myAppModule variable to
// configure the module with a controller
rejectRequestModule.controller('MyFilterDemoCtrl', function ($scope) {
       // controller code would go here
    var someData = {
              name: 'storage',
              detailed: 'Increase 100 pieces of goods',
              instructions: 'Approval',
              };
    $scope.data = someData;
    $scope.isHidden = true;
    $scope.showInput = function () {
    $scope.isHidden = !$scope.isHidden;
       }
       $scope.showTextarea = function () {
    $scope.isHidden = !$scope.isHidden;
       }
  }
);

// use the myAppModule variable to
// configure the module with a filter
rejectRequestModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
    }; 
});