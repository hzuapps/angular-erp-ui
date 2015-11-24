// create a new module called 'myAppModule' and save
// a reference to it in a variable called myAppModule
var liuqinweiAppModule = angular.module('liuqinweiAppModule', []);

// use the myAppModule variable to
// configure the module with a controller
liuqinweiAppModule.controller('liuqinweiFilterDemoCtrl', function ($scope) {
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
        }

    }
);

// use the myAppModule variable to
// configure the module with a filter
liuqinweiAppModule.filter('liuqinweistripDashes', function() {
    return function(txt) {
        // filter code would go here
    }; });



