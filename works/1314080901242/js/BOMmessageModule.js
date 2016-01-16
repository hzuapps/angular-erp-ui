//初始化表单数据
var BOMmessage = {
        order:'0001',
        product: '平面设计',
        data1:'2015.9.1',
        data2:'2015.9.31',
        state:' ',
        singlemember:'小张',
        remark:' ',
};
//创建模块
var BOMmessageModule = angular.module("BOMmessageModule", ['ngRoute']);
      
      BOMmessageModule.config(['$routeProvider',
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

         /*BOMmessageModule.controller('myWebsiteController', function($scope) {
            $scope.message = "Welcome to my Website";
         });

         BOMmessageModule.controller('aboutMeController', function($scope) {
            $scope.message = "machaorong 1314080901225";
         });*/
//创建服务
BOMmessageModule.factory("ManifestService",function($http){
      var getBOMmessage={};
      
    //getData方法
      getBOMmessage.getData=function(buttondata){
            var promise=$http({
              url:"jsonData/buttonData.json",
              method:"GET",
        data:buttondata
            });
            return promise;
      }
      
      return getBOMmessage;

});

//定义控制器

angular.module('BOMmessageModule').controller('MyFilterDemoCtrl', function($scope,ManifestService) {
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
          order:'0001',
          product: '平面设计',
          singlemember:'小张',
       },
       {
        order:'0002',
        product: '装潢设计',
        singlemember:'小李',
       },
       {
        order:'0003',
        product: '室内外装饰设计',
        singlemember:'小陈',
       }
      ];
});



//定义过滤器
BOMmessageModule.filter('stripDashes', function() {
  return function(txt) {
    // filter code would go here
  };
});

