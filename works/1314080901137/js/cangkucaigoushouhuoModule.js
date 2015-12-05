// create a new module called 'cangkucaigoushouhuoModule' and save 
// a reference to it in a variable called myAppModule 
var cangkucaigoushouhuoModule = angular.module('cangkucaigoushouhuoModule', []);

// use the myAppModule variable to
// configure the module with a controller
cangkucaigoushouhuoModule.controller('MyFilterDemoCtrl', function ($scope) {
       // controller code would go here
                var cat = {
            gongyingshang: 'china',
            cangku: '001',
            jingshouren:'zhang3',
            jingbanriqi:'2015-1-1',
            zhuangtai:'ok',
            beizhu:' '  
        };
        $scope.data = cat;
         $scope.isHidden = true;
        $scope.showInput = function () {
            $scope.isHidden = !$scope.isHidden;
        }
    }
);

// use the myAppModule variable to
// configure the module with a filter
cangkucaigoushouhuoModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; 
});//javascript.js