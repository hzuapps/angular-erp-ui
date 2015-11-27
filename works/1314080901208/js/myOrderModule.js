

//定义表单数据实体
      var orderData = {
          orderId: 1,
          storage: 'myStorage',
          people: "peopleName",
          orderDateTime: new Date(2015, 10, 20),
          orderStatus: 'theStatus',
          notes:"theNotes"
      };
     
     












var myOrderModule = angular.module("OrderModule", []);

//创建一个Service
myOrderModule.factory("orderService",function($http){
      var getOrderData={};
      getOrderData.getTime=function(){

        return new Date().toDateString();
      }
      getOrderData.getData=function(){
            var promise=$http({
              url:"jsonData/myOrderData.txt",
              method:"get",
            });
            return promise;
      }
      
      return getOrderData;

});

//定义控制器
myOrderModule.controller("CreateOrderInformation",function($scope,orderService){
          var promise=orderService.getData();
          promise.success(function(data,status){
          alert(status+"：请求成功，获取文件里的json数据成功");

          var orderData1=orderData;
          orderData1.orderId = data[0].orderId;
          orderData1.storage = data[0].storage;
          orderData1.people = data[0].people;
          orderData1.orderDateTime=data[0].orderDateTime;
          orderData1.orderStatus=data[0].orderStatus;
          orderData1.notes=data[0].notes;        

          $scope.theOrderDatas = [orderData];
     });
     promise.error(function(data,status){
           alert(status);
           alert("请求出现错误，具体是什么错误还有待检查");
     });

});

//使用directive渲染列表数据，样式即css已经定义在index页面
myOrderModule.directive("myorderdata",function(){
  return{
      restrict:"AEC",
      template:'<div id="tableBody-data" style="margin-top:5px;" ng-repeat="thedata in theOrderDatas">'
                 +'<div id="orderId" class="order orderId" style="">{{thedata.orderId}}</div>'
                 +'<div id="storage" class="order storage" style="">{{thedata.storage}}</div>'
                 +'<div id="people" class="order people" style="">{{thedata.people}}</div>'
                 +'<div id="dateTime" class="order dateTime" style="">{{thedata.orderDateTime}}</div>'
                 +'<div id="status" class="order status" style="">{{thedata.orderStatus}}</div>'
                 +'<div id="notes" class="order notes" style="">{{thedata.notes}}</div>'
                 +'</div>',
      transclude: true
  };
});

myOrderModule.filter("", function () {
});


//测试引用js文件是否成功的函数调用
function a() { alert("引用js文件成功");}









