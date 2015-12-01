// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var documentsDetailModule = angular.module('documentsDetailModule', []);

// use the myAppModule variable to
// configure the module with a controller
documentsDetailModule.controller('MyFilterDemoCtrl', function ($scope) {
       // controller code would go here
        var documentsDetail = {
            number: '001',
            code: 'AAA',
            type: 'food',
            name: 'chicken',
            model: 'big',
            unit:'kg',
            quantity:10,
            note:'taste good'
        };
        $scope.data = documentsDetail;
    }
);

// use the myAppModule variable to
// configure the module with a filter
documentsDetailModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
