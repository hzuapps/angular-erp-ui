// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var myAppModule = angular.module('myStoreModule', []);

// use the myAppModule variable to
// configure the module with a controller
myAppModule.controller('MyFilterDemoCtrl', function ($scope) {
       // controller code would go here
	var someData = {
            operator: "jinxiaohao",
            dateJoined: new Date(2010, 2, 23),
            dateEnd: new Date(2015, 10, 22),
            remark: "i'm a handsome boy!"
        };
        $scope.data = someData;
    }
);

// use the myAppModule variable to
// configure the module with a filter
myAppModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });