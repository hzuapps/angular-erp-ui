// create a new module called 'FinancialsalesModule' and save 
// a reference to it in a variable called FinancialsalesModule
var FinancialsalesModule = angular.module('FinancialsalesModule', []);

// use the FinancialsalesModule variable to
// configure the module with a controller
FinancialsalesModule.controller('MyfilterDemoCtrl', function ($scope) {
       // controller code would go here
      var Financialsales1 = {
            orderNumber:'123',
            ordername:'123',
            summary:'abc',
            moneyed:'123',
            money:'123',
            beizhu:'abc',
            
        };
        $scope.data = Financialsales1;
    }
);

// use the Financialsales variable to
// configure the module with a filter
FinancialsalesModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });