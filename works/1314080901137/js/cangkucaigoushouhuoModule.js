// create a new module called 'cangkucaigoushouhuoModule' and save 
// a reference to it in a variable called myAppModule 
var cangkucaigoushouhuoModule = angular.module('cangkucaigoushouhuoModule', []);

// use the myAppModule variable to
// configure the module with a controller
cangkucaigoushouhuoModule.controller('MyFilterDemoCtrl', function ($scope) {
       // controller code would go here
                var cat = {
            gongyingshang: '111',
            cangku: '111',
            jingshouren:'111',
            jingbanriqi:'111',
            zhuangtai:'111'  
        };
        $scope.data = cat;
       
    }
);

// use the myAppModule variable to
// configure the module with a filter
cangkucaigoushouhuoModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; 
});//javascript.js