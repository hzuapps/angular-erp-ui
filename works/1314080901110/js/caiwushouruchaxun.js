// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var caiwushouruchaxun = angular.module('caiwushouruchaxun', []);

// use the myAppModule variable to
// configure the module with a controller
caiwushouruchaxun.controller('MyFilterDemoCtrl', function ($scope) {
      // controller code would go here
   $scope.isHidden = true;
   $scope.showHide = function () {
   $scope.isHidden = !$scope.isHidden;
   }
      var chaxunxuanxiang 
        $scope.data =  chaxunxuanxiang;
    }
);

// use the myAppModule variable to
// configure the module with a filter
caiwushouruchaxun.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; }); 
