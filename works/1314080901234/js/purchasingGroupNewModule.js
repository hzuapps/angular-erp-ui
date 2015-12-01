// create a new module called 'purchasingGroupNewModule' and save 
// a reference to it in a variable called purchasingGroupNewModule 
var purchasingGroupNewModule = angular.module('purchasingGroupNewModule', []);

// use the myAppModule variable to
// configure the module with a controller
purchasingGroupNewModule.controller('purchasingGroupNewCtrl', function ($scope) {
       // controller code would go here

         var purchasingGroup = { 
             groupName: '一', 
             groupId:'00001',
         }; 
         $scope.data = purchasingGroup; 

    }
);

// use the myAppModule variable to
// configure the module with a filter
purchasingGroupNewModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });