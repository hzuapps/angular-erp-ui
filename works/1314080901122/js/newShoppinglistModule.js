// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var newShoppinglistModule = angular.module('newShoppinglistModule', []);

// use the myAppModule variable to
// configure the module with a controller
newShoppinglistModule.controller('MyFilterDemoCtrl', function ($scope) {
       // controller code would go here
        var NewShoppinglist = {
            supplier: 'lst',
            shoppingdate: '2015-10-28',
            recievedate: '2015-10-28',
            linkman: 'sss',
            totalprice:'5000'
        };
        $scope.data = NewShoppinglist;
    }
);

// use the myAppModule variable to
// configure the module with a filter
newShoppinglistModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
