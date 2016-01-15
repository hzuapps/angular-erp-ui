// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 

var myAppModule = angular.module('cangkuxinjianModule', []);

// use the myAppModule variable to
// configure the module with a controller
myAppModule.controller('MyFilterDemoCtrl', function ($scope) {
       // controller code would go here
        var someData = {
            Name: '仓库-盘点-新建盘点清单',
            interface: '表单',
            dateJoined: new Date(2015, 10, 20)
        };
        $scope.data = someData;

    }
);
//开始日期
myAppModule.directive("starttime",function(){
    return{
        restrict:"AEC",
        template:"<input id='startTime' type='text'>",
        transclude:true

    }
});
//结束日期
myAppModule.directive("endtime",function(){
    return{
        restrict:"AEC",
        template:"<input type='text'>",
        transclude:true

    }
});
//操作员
myAppModule.directive("opera",function(){
    return{
        restrict:"AEC",
        template:"<input type='text'>",
        transclude:true

    }
});
//备注
myAppModule.directive("notes",function(){
    return{
        restrict:"AEC",
        template:"<input type='text' style='width:500px;''>",
        transclude:true

    }
});

// use the myAppModule variable to
// configure the module with a filter
myAppModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
