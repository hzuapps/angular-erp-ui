
// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var myAppModule = angular.module('myAppModule', []);

// use the myAppModule variable to
// configure the module with a controller
myAppModule.controller('documentsDetail', function ($scope) {
       // controller code would go here
           var documentsDetail = {
            feiyongdanbianhao: '001',
            zhaiyao: '费用单明细',
            fukuanjine: 10000,
            beizhu: '交易完成'
       };
       $scope.data = documentsDetail;
    }
);

// use the myAppModule variable to
// configure the module with a filter
myAppModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
