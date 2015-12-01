// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var queryModule = angular.module('queryModule', []);

// use the myAppModule variable to
// configure the module with a controller
queryModule.controller('MyFilterDemoCtrl', function ($scope) {
       // controller code would go here
	   var listData = {
            salelist: '销售订单',
            listtype: '订单类型',
            listdate: new Date(2015, 10, 20),
            commitdate:new Date(2015,10,20),
            listID:'订单编号',
            liststate:'订单状态',
            remarks:'备注'
        };
        $scope.data = listData;
    }
);

// use the myAppModule variable to
// configure the module with a filter
queryModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
