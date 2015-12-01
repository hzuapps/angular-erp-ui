// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var myAppModule = angular.module('chaidanxinxiModule', []);

// use the myAppModule variable to
// configure the module with a controller
myAppModule.controller('MyFilterDemoCtrl', function ($scope) {
       // controller code would go here
       var someData = {
            Orderform: 00000001,
            Productname: 'shanping',
            Customername:'wangmoumou'
            Sealoffmember:'limoumou'
            Orderformrate:70
            Sealoffdate:new Date(2010, 2, 23),
            Finishdate:new Date(2010, 2, 23)
        };
        $scope.data = someData;
    }
);

// use the myAppModule variable to
// configure the module with a filter
myAppModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });