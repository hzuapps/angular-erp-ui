
// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var myAppModule = angular.module('qitashourushezhi', []);

// use the myAppModule variable to
// configure the module with a controller
myAppModule.controller('MyFilterDemoCtrl', function ($scope) {
       // controller code would go here
        var documentsDetail = {
            code: '001',
            type: 'weikuan',
            other:'wu'
        };
        $scope.data = documentsDetail;
        $scope.items = [
            {code: '001',type: 'weikuan',other:'wu'},
            {code: '002',type: 'dingjin',other:'wu'},
            {code: '003',type: 'fenqifukuan',other:'wu'} 
        ];
    }
);

// use the myAppModule variable to
// configure the module with a filter
myAppModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });