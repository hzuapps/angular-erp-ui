// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var feiyongdanModule = angular.module('feiyongdanModule', []);

// use the myAppModule variable to
// configure the module with a controller
feiyongdanModule.controller('MyFilterDemoCtrl', function ($scope) {
           var someData = {
            leibie:'费用类别',
            danwei:'报账单位',
            ren:'报账人',
            baozhangjine:'报账金额',
            shifujijine:'实付金额',
            riqi:'报账日期',
            zhuangtai:'状态',
            beizhu:'备注',
            dateJoined: new Date(2015, 10, 25),
        };
        $scope.data = someData;
       
    }
);

// use the myAppModule variable to
// configure the module with a filter
feiyongdanModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
