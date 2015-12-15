// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
<<<<<<< HEAD
//var itemData ={danjubianhao: '1234567',zhaiyao: '付款完成',yingfujine:'532.2',fukuanjine:'532.2', weifujine:'0.0',beizhu:'交易完成'};
var PaymentDetailsModule = angular.module('PaymentDetailsModule', []);

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
}).controller('PaymentDetailsFilter',function($scope,PaymentDetailsModuleService){
// controller code would go here

        /*PayData = [
=======
var PaymentDetailsModule = angular.module('PaymentDetailsModule', []);

// use the myAppModule variable to
// configure the module with a controller
PaymentDetailsModule.controller('MyFilterDemoCtrl', function ($scope) {
       // controller code would go here
        someData = [
>>>>>>> origin/master
           { danjubianhao: '1234567',zhaiyao: '付款完成',yingfujine:'532.2',fukuanjine:'532.2', weifujine:'0.0',beizhu:'交易完成'},
           { danjubianhao: '1234568',zhaiyao: '等待付款',yingfujine:'533.2',fukuanjine:'532.2', weifujine:'1.0',beizhu:'交易未完成'},
           { danjubianhao: '1234569',zhaiyao: '等待付款',yingfujine:'534.2',fukuanjine:'532.2', weifujine:'2.0',beizhu:'交易未完成'},
           ];
<<<<<<< HEAD
        $scope.data = PayData;*/

          var promise=PaymentDetailsModuleService.getData();
          promise.success(function(data,status, headers, config, statusText){
          $scope.theOrderDatas = data.PayData;

          /* alert(status+"：请求成功，获取文件里的json数据成功");
          var orderData=itemData;
          orderData.danjubianhao = data[0].danjubianhao;
          orderData.zhaiyao = data[0].zhaiyao;
          orderData.yingfujine = data[0].yingfujine;
          orderData.fukuanjine=data[0].fukuanjine;
          orderData.weifujine=data[0].weifujine;
          orderData.beizhu=data[0].beizhu;
          $scope.theOrderDatas = [itemData];*/
     });
     promise.error(function(data,status){
           alert(status);
           alert("请求出现错误，具体错误还有待检查");
     });
});

=======
        $scope.data = someData;
    }
);
>>>>>>> origin/master
 
// use the myAppModule variable to
// configure the module with a filter
PaymentDetailsModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
