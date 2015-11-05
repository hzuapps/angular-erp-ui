// create a new module called 'myAppModule' and save
// a reference to it in a variable called myAppModule
var ZhengjinhuaAppModule = angular.module('ZhengjinhuaAppModule', []);

// use the myAppModule variable to
// configure the module with a controller
ZhengjinhuaAppModule.controller('ZhengjinhuaFilterDemoCtrl', function ($scope) {
    // controller code would go here
        var wuliao = {
        wuliao leibie='wujin',
        wuliao mingcheng='5756336'
        gengxin riqi='2015-10-20',
        pinyin ma='5456',
        wuliao miaosu='54567'

        };
        $scope.data = wuliao;
        }
}


);

// use the myAppModule variable to
// configure the module with a filter
ZhengjinhuaAppModule.filter('ZhengjinhuastripDashes', function() {
    return function(txt) {
        // filter code would go here
    }; });


