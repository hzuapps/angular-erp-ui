// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var yuangongchaxunModule = angular.module('yuangongchaxunModule', []);

// use the myAppModule variable to
// configure the module with a controller
yuangongchaxunModule.controller('MyFilterDemoCtrl', function ($scope) {
       // controller code would go here
       var yuangongchaxun = {
            leixing: '123',
            danjia: 123,
            shuliang: 123,
            jine: 123,
            IDcard: '123'
        };
        $scope.data = yuangongchaxun;
    }
);

// use the myAppModule variable to
// configure the module with a filter
yuangongchaxunModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
