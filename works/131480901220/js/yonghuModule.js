//初始化表单数据
var yonghu = {
        denglu:' ',            
        xianshi:' ',
};
//创建模块
var yonghuModule = angular.module("yonghuModule", ['ngRoute']);
      yonghuModule.config(['$routeProvider',
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

         /*yonghuModule.controller('myWebsiteController', function($scope) {
            $scope.message = "Welcome to my Website";
         });

         yonghuModule.controller('aboutMeController', function($scope) {
            $scope.message = "machaorong 1314080901225";
         });*/



//创建服务
yonghuModule.factory("ManifestService",function($http){
      var getyonghu={};
      
      //getData方法
      getyonghu.getData=function(buttondata){
            var promise=$http({
              url:"jsonData/buttonData.json",
              method:"GET",
              data:buttondata
            });
            return promise;
      }
      
      return getyonghu;

});

//定义控制器

angular.module('yonghuModule').controller('MyFilterDemoCtrl', function($scope,ManifestService) {
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
                denglu: 'xiaozhang',            
                xianshi: '小张',
             },
             {
               denglu: 'xiaochen',            
               xianshi: '小陈',
             },
             {
                denglu: 'xiaoxu',            
                xianshi: '小徐',
             }
            ];

});



//定义过滤器
yonghuModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
    };
});
