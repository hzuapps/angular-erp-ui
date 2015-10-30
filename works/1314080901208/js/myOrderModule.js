
//定义表单数据实体
      var orderData = {
          orderId: 1,
          storage: 'myStorage',
          people: "peopleName",
          dateTime: new Date(2015, 10, 20),
          status: 'theStatus',
          notes:"theNotes"
      };
     



//
var myOrderModule = angular.module("OrderModule", []);
myOrderModule.controller("CreateOrderInformation", function ($scope) {
    
   
    var orderData1 = orderData;
    orderData1.orderId = 1;
    orderData1.storage = "storage1";
    orderData1.people = "simple";
    $scope.theOrderDatas = [orderData1];
});
myOrderModule.filter("", function () {
    

});



//测试引用js文件是否成功的函数调用
function a() { alert("引用js文件成功");}