// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var orderModule = angular.module('orderModule', []);

// use the myAppModule variable to
// configure the module with a controller
orderModule.controller('createOrderCtrl', function ($scope) {
    // controller code would go here
        var someData = {
            bumenname:'部门名称',
            bumendaima:'部门代码'，
            bumenzhuguan:'部门主管',
            bumenmiaosu:'部门描述'
        };
        $scope.data = someData;
    }
);

// use the myAppModule variable to
// configure the module with a filter
orderModule.filter('stripDashes', function () {
    return function (txt) {
        // filter code would go here
    };
});// javascript.js