// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var providerModule = angular.module('providerModule', []);

// use the myAppModule variable to
// configure the module with a controller
providerModule.controller('MyFilterDemoCtrl', function ($scope) {
       // controller code would go here
        var providerData = {
            providerNum: '001',
            providerFullName: 'intel',
            providerSimpName: 'intel',
            providerType: 'computer',
            providerIntroduce: 'fashionable product',
            address: 'China'
        };
        $scope.data = providerData;
        $scope.isHidden = true;
        $scope.showInput = function () {
            $scope.isHidden = !$scope.isHidden;
        }
}
);

// use the myAppModule variable to
// configure the module with a filter
providerModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });