// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var feiyongdanModule = angular.module('feiyongdanModule', []);

// use the myAppModule variable to
// configure the module with a controller
feiyongdanModule.controller('feiyongdanCtrl', function ($scope) {
           $scope.someData = [
         { number: '01',abstract: '水费',payment:'50000',remark:'支付水费', description:'balabala'},
         { number: '02',abstract: '电费',payment:'70000',remark:'支付电费', description:'balabala'},
         { number: '03',abstract: '薪水',payment:'4000',remark:'支付员工薪水', description:'balabala'}
];

// use the myAppModule variable to
// configure the module with a filter
feiyongdanModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
