//初始化表单数据
var order = {
    saleOrder: ' ',
    orderType: ' ',
    orderDate:' ',
		deliveryDate:' ',
		orderNumber:' ',
		orderState:' ',
		remark:' ',
		
};
//创建模块
var orderModule = angular.module("orderModule", ['ngRoute']);
      orderModule.config(['$routeProvider',
         function($routeProvider) {
            $routeProvider.
               when('/project', {
                  templateUrl: 'pages/project.html',
                  //controller: 'projectController'
               }).
               when('/tableData', {
                  templateUrl: 'pages/tableData.html',
                  //controller: 'projectController'
               }).
               when('/aboutMe', {
                  templateUrl: 'pages/aboutMe.html',
                  //controller: 'aboutMeController'
               }).
               otherwise({
                  redirectTo: '/project'
               });
         }]);

    
//创建服务
orderModule.factory("ManifestService",function($http){
      var getorder={};
      
      //getData方法
      getorder.getData=function(buttondata){
            var promise=$http({
              url:"jsonData/buttonData.json",
              method:"GET",
              data:buttondata
            });
            return promise;
      }
      
      return getorder;

});

//定义控制器
angular.module('orderModule').controller('MyFilterDemoCtrl', function($scope,ManifestService) {
          var promise=ManifestService.getData();
          
          $scope.create = function () {
            $scope.showSuccessMessage=false;
            $scope.showErrorMessage=false;
            //promise的成功方法
            promise.success(function(data,status){
            
          
            $scope.successMessage =data[0].SMessage;
            alert($scope.successMessage);
            //$scope.showSuccessMessage=true;
            });
          
            //promise的失败方法
            promise.error(function(data,status){
          
          
            $scope.errorsMessage =data[0].EMessage;
            alert($scope.errorsMessage);
          
            });
          }  
            $scope.SelectItem = [
             {
                orderType: '正常订单',
             },
             {
                orderType: '打样订单',
             },
             {
                orderType: '返工订单',              
             },
			  {
                orderType: '委外订单',             
             },
			  {
                orderType: '通函订单',             
             },
			  {
                orderType: '特许订单',        
             }
            ];
		
});



//定义过滤器
orderModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
    };
});

