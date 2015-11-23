@@ -0,0 +1,29 @@
// create a new module called 'salesIncomeModule' and save 
// a reference to it in a variable called salesIncomeModule 
var salesIncomeModule = angular.module('salesIncomeModule', []);

// use the salesIncomeModule variable to
// configure the module with a controller
salesIncomeModule.controller('createSalesIncomeCtrl', function ($scope) {
    // controller code would go here
        var salesIncome = {
            UnitName: ' ',
            CollectMode: ' ',
            CollectDay: 123,
            jingshouren: ' ',
            shoukuanyue: 123,
            shoukuanzhanghu:123,
            yinhangzhnanghu:123,
            zhuangtai:' ',
            hexiaoyue:123,
            beizhu:' '
        };
        $scope.data = salesIncome;
    }
);

// use the salesIncomeModule variable to
// configure the module with a filter
salesIncomeModule.filter('stripDashes', function () {
    return function (txt) {
        // filter code would go here
    };
});// javascript.js 
