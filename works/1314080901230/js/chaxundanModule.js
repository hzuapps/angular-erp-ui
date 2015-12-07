// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var chaxundanModule = angular.module('chaxundanModule', []);

// use the myAppModule variable tos
// configure the module with a controller
chaxundanModule.controller('createchaxundanDemoCtrl', function ($scope) {
       // controller code would go here
        var chaxundanSet = {
         Unit name:"wwx"，
         Payment method:"支付宝",
         Payment date:"2015-10-20",
         Middle man:"wwx",
         Payment amount:"wwx",
         Payment account:"wwx",
         Bank account:"wwx",
         State:"wwx",
         Write off amount:"wwx",
         Remarks:"wwx",
        };
        $scope.data = chaxundanSet;
    }
);

// use the myAppModule variable to
// configure the module with a filter
chaxundanModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; }); // javascript.js
