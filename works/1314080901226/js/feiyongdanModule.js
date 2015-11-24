// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var feiyongdanModule = angular.module('feiyongdanModule', []);

// use the myAppModule variable to
// configure the module with a controller
feiyongdanModule.controller('feiyongdanCtrl', function ($scope) {
           $scope.someData = [
         { number: '01',abstract: 'water rate',payment:'50000',remark:'pay for electricity'},
         { number: '02',abstract: 'power rate',payment:'70000',remark:'pay for water'},
         { number: '03',abstract: 'salary',payment:'4000',remark:'pay for employee'}
];

// use the myAppModule variable to
// configure the module with a filter
feiyongdanModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
