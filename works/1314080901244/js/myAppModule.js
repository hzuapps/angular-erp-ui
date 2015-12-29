
// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var myAppModule = angular.module('myAppModule', []);

// use the myAppModule variable to
// configure the module with a controller
myAppModule.controller('MyFilterDemoCtrl', function ($scope) {
       // controller code would go here
      var someData={
        FunctionName:'新增工作组',
        OfficerName:'某某某某',
        NewGroName:'新增工作组',
        Save:'001',
        WorkShop:{
            WorkShop1:'木工车间',
            WorkShop2:'油漆车间',
            WorkShop3:'包装车间',
            WorkShop4:'橱柜车间',
               }
      };
      $scope.data=someData;
    }
);

// use the myAppModule variable to
// configure the module with a filter
myAppModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
