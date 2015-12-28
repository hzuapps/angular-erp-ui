// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var postDataModule = angular.module('postDataModule', []);

// use the myAppModule variable to
// configure the module with a controller
postDataModule.controller('MyFilterDemoCtrl', function ($scope) {
       // controller code would go here
        var postData = {
            department: 'JENNA',
            name: 'GRANT',
            level: 'JENNA',
            type: 'JENNA',
            salary: 100,
            duty: 'GRANT'
        };
        $scope.data = postData;
		$scope.isHidden = true;
        $scope.show = function(){
            $scope.isHidden = !$scope.isHidden;
            }
    }
);

// use the myAppModule variable to
// configure the module with a filter
postDataModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
