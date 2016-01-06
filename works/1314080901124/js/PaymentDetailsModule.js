// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
//var itemData ={danjubianhao: '1234567',zhaiyao: '付款完成',yingfujine:'532.2',fukuanjine:'532.2', weifujine:'0.0',beizhu:'交易完成'};
var PaymentDetailsModule = angular.module('PaymentDetailsModule', ['ngRoute']);

PaymentDetailsModule.factory('PaymentDetailsModuleService',function($http){
     var getitemData={};
     getitemData.getData=function(){
            var promise=$http({
              url:"data.json",
              method:"GET"
            });
            return promise;
      }
      return getitemData;
}).controller('PaymentDetailsCtrl',function($scope,PaymentDetailsModuleService){
// controller code would go here

          var promise=PaymentDetailsModuleService.getData();
          promise.success(function(data,status, headers, config, statusText){
          $scope.theOrderDatas = data.PayData;

     });
     promise.error(function(data,status){
           alert(status);
           alert("请求出现错误，具体错误还有待检查");
     });
});

// use the myAppModule variable to
// configure the module with a filter
PaymentDetailsModule.filter('PaymentDetailsModulestripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });



PaymentDetailsModule.config(['$routeProvider',
           function($routeProvider) {
              $routeProvider
                   .when('/website', {
                   templateUrl: 'website.html',
                   controller: 'PaymentDetailsCtrl'
                })
                .when('/table', {
                   templateUrl: 'table.html',
                   controller: 'PaymentDetailsCtrl'
                })
                .when('/about', {
                    templateUrl: 'about.html',
                }).
                otherwise({
                   redirectTo: '/website'
                });
          }]);
