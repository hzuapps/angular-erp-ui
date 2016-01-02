// javascript.js
//初始化表单数据
var listData = {
	Num: '001',
    Message: '家住在隔壁',
    Remark: 'xxx ',	
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
          orderData.Num = data[0].Num;
          orderData.Message = data[0].Message;
          orderData.Remark = data[0].Remark;
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