// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var PaymentDetailsModule = angular.module('PaymentDetailsModule', []);

// use the myAppModule variable to
// configure the module with a controller
PaymentDetailsModule.controller('MyFilterDemoCtrl', function ($scope) {
       // controller code would go here
	var PaymentDetails = {
            danjubianhao: '123456789',
            zhaiyao: '采购付款 付款明细',
            yingfujine: '1452154.12',
            gukuanjine: '1452154.12',
            weifujine: '0.00',
            beizhu:'交易完成'
        };
        $scope.data = PaymentDetails;
    }
);

// use the myAppModule variable to
// configure the module with a filter
myAppModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });