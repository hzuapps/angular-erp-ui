// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var PaymentDetailsModule = angular.module('PaymentDetailsModule', []);

// use the myAppModule variable to
// configure the module with a controller
PaymentDetailsModule.controller('MyFilterDemoCtrl', function ($scope) {
       // controller code would go here
        $scope.someData = [
           { danjubianhao: '1234567',zhaiyao: '付款完成',yingfujine:'532.2',fukuanjine:'532.2', weifujine:'0.0',beizhu:'交易完成'},
           { danjubianhao: '1234568',zhaiyao: '等待付款',yingfujine:'533.2',fukuanjine:'532.2', weifujine:'1.0',beizhu:'交易未完成'},
           { danjubianhao: '1234569',zhaiyao: '等待付款',yingfujine:'534.2',fukuanjine:'532.2', weifujine:'2.0',beizhu:'交易未完成'},
           ];
        $scope.data = someData;
    }
);
 
// use the myAppModule variable to
// configure the module with a filter
PaymentDetailsModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
