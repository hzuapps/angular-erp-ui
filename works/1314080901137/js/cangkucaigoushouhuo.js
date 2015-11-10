// create a new module called 'cangkucaigoushouhuo' and save 
// a reference to it in a variable called myAppModule 
var cangkucaigoushouhuo = angular.module('cangkucaigoushouhuo', []);

// use the myAppModule variable to
// configure the module with a controller
cangkucaigoushouhuo.controller('cangkucaigoushouhuo', function ($scope) {
       // controller code would go here
                var typeSet = {
            gongyingshang: '111',
            cangku: '111',
            jingshouren:'111',
            jingbanriqi:'111',
            zhuangtai:'111'  
        };
        $scope.data = typeSet;
       
    }
);

// use the myAppModule variable to
// configure the module with a filter
cangkucaigoushouhuo.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });