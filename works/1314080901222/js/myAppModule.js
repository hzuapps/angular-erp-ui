var listData = {
	xuhao: '001',
	bianma: '1',
	ming: 'yifu ',
	leibie: 'yifu ',
	xinghao: 'yifu ',
	yanse: 'yifu ',
	shuliang: 'yifu ',
	danwei: 'yifu ',
	danjia: 'yifu ',
};




//创建模块
var myAppModule = angular.module('myAppModule', ['ngRoute']); 
    function theRoute($routeProvider) {
    $routeProvider.when("/ckkc", {
     
        templateUrl: "pages/ckkc.html",
         
    })
    .when("/about", {
     
        templateUrl: "pages/about.html",
       
    })
	.when("/website",{
    templateUrl:"pages/website.html",
    
	})
    .otherwise({
      // when all else fails
        templateUrl: "pages/website.html",
        
    });}
   
    myAppModule.controller("MyFilterDemoCtrl", function ($scope,ListService) {
        var promise=ListService.getData();
          promise.success(function(data,status){
          alert(status+"：获取数据成功，下面将一一列出来");
          var orderData=listData;
          orderData.xuhao = data[0].xuhao;
          orderData.bianma = data[0].bianma;
          orderData.ming = data[0].ming;
		  orderData.leibie = data[0].leibie;
		  orderData.xinghao = data[0].xinghao;
		  orderData.yanse = data[0].yanse;
		  orderData.shuliang = data[0].shuliang;
		  orderData.ming = data[0].ming;
		  orderData.danjia = data[0].danjia;
          $scope.theOrderDatas = [listData];
     });
     promise.error(function(data,status){
           alert(status);
           alert("请求出现错误，具体是什么错误还有待检查");
     });
    });
    
    myAppModule.config(theRoute);

myAppModule.factory('ListService',function($http){
     var getMyData={};
     getMyData.getData=function(){
            var promise=$http({
              url:"json/ckkc.json",
              method:"get",
            });
            return promise;
      }
      return getMyData;
});