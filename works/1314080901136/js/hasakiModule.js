// create a new module called 'hasakiModule' and save 
// a reference to it in a variable called hasakiModule
var hasakiModule = angular.module('hasakiModule', []);

// use the hasakiModule variable to
// configure the module with a controller
hasakiModule.controller('MyfilterDemoCtrl', function ($scope) {
       // controller code would go here
        var hasaki = {
            groupName: '小组名', 
            groupId:'00002'
            
        };
        $scope.data = hasaki;
    }
);

// use the Financialsales variable to
// configure the module with a filter
hasakiModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });