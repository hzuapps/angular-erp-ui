//初始化表单数据

var SuppInfor= 
			{  SuppId: '001',
			    CreatDate:'2015-10-23' ,
			    SuppType: '五金类',
			    SuppFullName: '供应商全称',
			    pinyincode: 'null',
			    SuppPage: ' ',
			    SuppShortName:'供应商简称',
			    AdministrativeDivision :'行政区域',
			    SuppDesc :'供应商简介',
			};


//创建模块
var myAppModule = angular.module("myAppModule", ['ngRoute']);
      
      myAppModule.config(['$routeProvider',
         function($routeProvider) {
            $routeProvider.
               when('/myWebsite', {
                  templateUrl: 'pages/myWebsite.html',
                  //controller: 'myWebsiteController'
               }).
			   when('/tableData', {
                  templateUrl: 'pages/tableData.html',
                  //controller: 'myWebsiteController'
               }).
               when('/aboutMe', {
                  templateUrl: 'pages/aboutMe.html',
                  //controller: 'aboutMeController'
               }).
               otherwise({
                  redirectTo: '/myWebsite'
               });
         }]);

         /*myAppModule.controller('myWebsiteController', function($scope) {
            $scope.message = "Welcome to my Website";
         });
         myAppModule.controller('aboutMeController', function($scope) {
            $scope.message = "machaorong 1314080901225";
         });*/



//创建服务
myAppModule.factory("AppService",function($http){
      var getmyAppData={};
      
	  //getData方法
      getmyAppData.getData=function(buttondata){
            var promise=$http({
              url:"json/buttonData.json",
              method:"GET",
			  data:buttondata
            });
            return promise;
      }
      
      return getmyAppData;

});

//定义控制器

angular.module('myAppModule').controller('MyFilterDemoCtrl', function($scope,AppService) {
          var promise=AppService.getData();
		  
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
			    SuppType: '五金类',
			 },
			 {
			    SuppType: '电器类',
			 },
			 {
			    SuppType: '板材类',
			 },
			 {
			    SuppType: '油漆类',
			 },
			 {
			    SuppType: '刀具类',
			 },
			 {
			    SuppType: '其他',
			 },
			];
			

});



//定义过滤器
ManifestDataModule.filter('stripDashes', function() {
	return function(txt) {
		// filter code would go here
	};
});