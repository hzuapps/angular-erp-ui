
// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var orderModule = angular.module('orderModule', []);
 var someData = {
            sidePlates:'侧板名',
            laminates:"层板名",
            backboard:"背板名",
            door:"门板名",
            veneer:"木皮名"
        };
// use the myAppModule variable to
// configure the module with a controller
orderModule.controller('Ctrl', function ($scope) {
    // controller code would go here
       
        $scope.myData = someData;
    }
);

// use the myAppModule variable to
// configure the module with a filter
orderModule.filter('Dashes', function () {
    return function (txt) {
        // filter code would go here
    };
});// javascript.js