// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var orderModule = angular.module('orderModule', []);

// use the myAppModule variable to
// configure the module with a controller
orderModule.controller('createOrderCtrl', function ($scope) {
    // controller code would go here
        var someData = {
            id: '序号',
            number: '编号',
            name: '品名',
            type: '类别',
            xinghao: '型号',
            color:'颜色',
            numbers:'数量',
            danwei:'单位',
            danjia:'单价',
            jine:'金额',
            avg:'平均价',
            jiubianma:'旧编码'
        };
        $scope.data = someData;
    }
);

// use the myAppModule variable to
// configure the module with a filter
orderModule.filter('stripDashes', function () {
    return function (txt) {
        // filter code would go here
    };
});// javascript.js