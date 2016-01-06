// create a new module called 'myAppModule' and save
// a reference to it in a variable called myAppModule
var SupplierContactAppModule = angular.module("SupplierContactAppModule", ['ngRoute']);

// use the myAppModule variable to
// configure the module with a controller
SupplierContactAppModule.controller('SupplierContactFilterDemoCtrl', function ($scope,$http) {
        // controller code would go here
            var workerInformation = {
                name: 'Liuqinwei',
                phone: '1234567',
                telephone: '453452425255',
                code: '545324525545',
                qq: '122444',
                email: '34234234@qq.com',
                zhiwu: '董事长',
                beizhu: '男',
            };
        var promise=$http({
            url:"jsonData/data.json",
            method:"get",
        });

        promise.success(function(data,status){
       $scope.items = [{name:data[0].name,
                        phone:data[0].phone,
                        officePhone:data[0].officePhone,
                        phototelephony:data[0].phototelephony,
                        QQ:data[0].QQ,
                        email:data[0].email,
                        job:data[0].job,
                        remark:data[0].remark},
                       {name:data[1].name,
                        phone:data[1].phone,
                        officePhone:data[1].officePhone,
                        phototelephony:data[1].phototelephony,
                        QQ:data[1].QQ,
                        email:data[1].email,
                        job:data[1].job,
                        remark:data[1].remark},
                       {name:data[2].name,
                        phone:data[2].phone,
                        officePhone:data[2].officePhone,
                        phototelephony:data[2].phototelephony,
                        QQ:data[2].QQ,
                        email:data[2].email,
                        job:data[2].job,
                        remark:data[2].remark}];
        });
        promise.error(function(data,status){
            alert(status);
            alert("请求出现错误，具体是什么错误还有待检查");
        });


        }


);

// use the myAppModule variable to
// configure the module with a filter
SupplierContactAppModule.filter('SupplierContactstripDashes', function() {
    return function(txt) {
        // filter code would go here
    }; });



SupplierContactAppModule.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/website', {
                templateUrl: 'website.html',
                //controller: 'aboutController'
            }).
            when('/table', {
                templateUrl: 'table.html',
                //controller: 'aboutController'
            }).
            when('/about', {
                templateUrl: 'about.html',
                //controller: 'aboutController'
            }).
            otherwise({
                redirectTo: '/about'
            });
    }]);



