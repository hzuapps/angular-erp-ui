
// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var myAppModule = angular.module('myAppModule', []);

// use the myAppModule variable to
// configure the module with a controller
var documentsDetail = {
                 laiyuan:"laiyuan1",
                 leibie:"leibie1",
                 mingchen:"mingchen1",
                 xinhao:"xinhao1",
                 yanse:"red",
                 changdu:"changdu1",
                 kuandu:"kuandu1",
                 houdu:"houdu1",
                 zhuangtai:"zhuangtai1",
                 kucunshu:"kucunshu1",
                 xuqiushu:"xuqiushu1",
                 caigoushu:"caigoushu1",
                 BOM:"bom1"
                };

myAppModule.controller('MyFilterDemoCtrl', function ($scope,$http) {
       // controller code would go here
         var promise=$http({
               url:"js/myData.json",
               method:"get",
             });
        promise.success(function(data,status){
             var documentsDetail1=documentsDetail;
                 documentsDetail1.laiyuan=data.laiyuan;
                 documentsDetail1.leibie=data.leibie;
                 documentsDetail1.mingchen=data.mingchen;
                 documentsDetail1.xinhao=data.xinhao;
                 documentsDetail1.yanse=data.yanse;
                 documentsDetail1.changdu=data.changdu;
                 documentsDetail1.kuandu=data.kuandu;
                 documentsDetail1.houdu=data.houdu;
                 documentsDetail1.zhuangtai=data.zhuangtai;
                documentsDetail1.kucunshu=data.kucunshu;
                 documentsDetail1.xuqiushu=data.xuqiushu;
                 documentsDetail1.caigoushu=data.caigoushu;
                 documentsDetail1.BOM=data.BOM;
                  $scope.data1 = documentsDetail1;
        });
        promise.error(function(data,status){
            alert(status);
            alert("请求出现错误，具体是什么错误还有待检查");
      });
       

    }
);


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

// use the myAppModule variable to
// configure the module with a filter
myAppModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });