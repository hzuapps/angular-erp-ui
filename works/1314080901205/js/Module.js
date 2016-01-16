// javascript.js
//初始化表单数据
var listData = {
	jsr: '',
    zcje: '',
    jt: ' ',	
	bz: ' ',
};

//创建模块
var Module = angular.module('Module', ['ngRoute']); 
    function theRoute($routeProvider) {
    $routeProvider.when("/about", {
     
        templateUrl: "pages/about.html",
         
    })
    .when("/list", {
     
        templateUrl: "pages/list.html",
       
    })
    .otherwise({
      // when all else fails
        templateUrl: "pages/about.html",
        
    });}
   
    Module.controller("ListController", function ($scope,ListService) {
        var promise=ListService.getData();
    
		    promise.success(function(data,status){
          alert(status+"：获取数据成功，下面将一一列出来");
          var orderData=listData;
          orderData.jsr = data[0].jsr;
          orderData.zcje = data[0].zcje;
          orderData.jt = data[0].jt;
		  orderData.bz = data[0].bz;
          $scope.theOrderDatas = [listData];
     });
     promise.error(function(data,status){
           alert(status);
           alert("请求出现错误，具体是什么错误还有待检查");
     });

    });
    
    Module.config(theRoute);

Module.factory('ListService',function($http){
     var getMyData={};
     getMyData.getData=function(){
            var promise=$http({
              url:"json/data.json",
              method:"get",
            });
            return promise;
      }
      return getMyData;
});