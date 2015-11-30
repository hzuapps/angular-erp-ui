// create a new module called 'bumenModule' and save 
// a reference to it in a variable called myAppModule 
var bumenModule = angular.module('bumenModule', []);

// use the myAppModule variable to
// configure the module with a controller
bumenModule.controller('MyFilterDemoCtrl', function ($scope) {
    // controller code would go here
        var bumenData = {
            bumenname:'部门名称',
            bumendaima:'部门代码',
            bumenzhuguan:'部门主管',
            bumenmiaoshu:'部门描述'
        };
        $scope.data = bumenData;
    }
);

// use the myAppModule variable to
// configure the module with a filter
bumenModule.filter('stripDashes', function () {
    return function (txt) {
        // filter code would go here
    };
});// javascript.js