//初始化表单数据
var banjian = {
        leibie: '侧板',
        mingchen: '内侧板',
        remark:' ',
};
//创建模块
var banjianModule = angular.module("banjianModule", ['ngRoute']);
      banjianModule.config(['$routeProvider',
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

         /*banjianModule.controller('myWebsiteController', function($scope) {
            $scope.message = "Welcome to my Website";
         });

         banjianModule.controller('aboutMeController', function($scope) {
            $scope.message = "machaorong 1314080901225";
         });*/



//创建服务
banjianModule.factory("ManifestService",function($http){
      var getbanjian={};
      
      //getData方法
      getbanjian.getData=function(buttondata){
            var promise=$http({
              url:"jsonData/buttonData.json",
              method:"GET",
              data:buttondata
            });
            return promise;
      }
      
      return getbanjian;

});

//定义控制器

angular.module('banjianModule').controller('MyFilterDemoCtrl', function($scope,ManifestService) {
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
                leibie: '侧板',
                mingchen: '内侧板',
             },
             {
                leibie: '层板',
                mingchen: '底板',
             },
             {
                leibie: '门板',
                mingchen: '掩门门板',
             }
            ];

});



//定义过滤器
banjianModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
    };
});

