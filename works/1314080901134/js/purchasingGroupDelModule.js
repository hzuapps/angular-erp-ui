// create a new module called 'purchasingGroupDelModule' and save 
// a reference to it in a variable called purchasingGroupDelModule 
var purchasingGroupDelModule = angular.module('purchasingGroupDelModule', []);

// use the purchasingGroupDelModule variable to
// configure the module with a controller
purchasingGroupDelModule.controller('purchasingGroupDelCtrl', function ($scope) {
       // controller code would go here
       function purchasingGroupDelCtrl($scope) {
        var purchasingGroup = {
            groupName: '一',
            groupID: '00001'
        };
        $scope.data = purchasingGroup;
    }
    }
);

// use the purchasingGroupDelModule variable to
// configure the module with a filter
purchasingGroupDelModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });