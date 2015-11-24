

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
    $scope.theOrderDatas = [orderData];
});

myOrderModule.directive("myorderdata",function(){
  return{
      restrict:"AEC",
      template:'<div id="tableBody-data" style="margin-top:5px;" ng-repeat="thedata in theOrderDatas">'
                 +'<div id="orderId" class="order orderId" style="">{{thedata.orderId}}</div>'
                 +'<div id="storage" class="order storage" style="">{{thedata.storage}}</div>'
                 +'<div id="people" class="order people" style="">{{thedata.people}}</div>'
                 +'<div id="dateTime" class="order dateTime" style="">{{thedata.dateTime}}</div>'
                 +'<div id="status" class="order status" style="">{{thedata.status}}</div>'
                 +'<div id="notes" class="order notes" style="">{{thedata.notes}}</div>'
                 +'</div>',
      transclude: true
  };
});

myOrderModule.filter("", function () {
});



//测试引用js文件是否成功的函数调用
function a() { alert("引用js文件成功");}