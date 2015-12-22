// create a new module called 'supplierInformationModule' and save 
// a reference to it in a variable called supplierInformationModule 
var supplierInformationModule = angular.module('supplierInformationModule', []);

// use the supplierInformationModule variable to
// configure the module with a controller

supplierInformationModule.controller('MyFilterDemoCtrl', function ($http,$scope) {
       // controller code would go here
       $http.get("supplierInformationList_JSON.txt").success(function(someData){
        $scope.data=someData;
       });
     })

// use the supplierInformationModule variable to
// configure the module with a filter
supplierInformationModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
    };
});
