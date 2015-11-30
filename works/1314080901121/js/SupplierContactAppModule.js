// create a new module called 'myAppModule' and save
// a reference to it in a variable called myAppModule
var SupplierContactAppModule = angular.module('SupplierContactAppModule', []);

// use the myAppModule variable to
// configure the module with a controller
SupplierContactAppModule.controller('SupplierContactFilterDemoCtrl', function ($scope) {
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
            $scope.data = workerInformation;
            $scope.items = [
                {name: '萧炎',phone: '13546764899',officePhone: '07538573637',phototelephony: '345435',QQ: "3885746",email:'3885746@qq.com',job: '董事长',remark:'无'},
                {name: '薰儿',phone: '13546766666',officePhone: '07535656656',phototelephony: '454545',QQ: "5345535",email:'5345535@qq.com',job: '董事长助理',remark:'无'},
                {name: '潇潇',phone: '13546777777',officePhone: '07537676767',phototelephony: '453424',QQ: "3454523",email:'3454523@qq.com',job: '总经理',remark:'无'},
        ];
        }


);

// use the myAppModule variable to
// configure the module with a filter
SupplierContactAppModule.filter('SupplierContactstripDashes', function() {
    return function(txt) {
        // filter code would go here
    }; });



