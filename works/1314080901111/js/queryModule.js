// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var queryModule = angular.module('queryModule', ['ngRoute']);

// use the myAppModule variable to
// configure the module with a controller

queryModule.config(function($routeProvider){
  
    $routeProvider
.when('/',{
  templateUrl:'page/home.html',
})
.when('/home',{
  templateUrl:'page/home.html',
})
.when('/about',{
  templateUrl:'page/about.html',
  controller:'aboutController'
})
.when('/form',{
  templateUrl:'page/form.html',
  controller:'inputController'
})
.when('/content',{
  templateUrl:'page/content.html',
  controller:'contentController'
});
});

queryModule.factory('providerService',function($http){
  var dataSvc={};
  dataSvc.getData=function(theData){
    var promise=$http({method: 'POST',url: 'json/operationData.json',data: theData});
    return promise;
  }
  return dataSvc;
});
queryModule.controller("inputController",function($scope,providerService){
          var someData = {
            saleList: '销售订单',
            listType: '订单类型',
            listDate: new Date(2015, 10, 20),
            commitDate:new Date(2015,10,20),
            listID:'订单编号',
            listState:'订单状态',
            remarks:'备注'
              };
          $scope.data=someData;
          $scope.isHidden=true;

          // $scope.provider={};
          $scope.register=function(){
              var promise=providerService.getData($scope.provider);
              promise.success(function(data){
                  $scope.backMess=data.success;
                  $scope.isHidden = !$scope.isHidden;
                  if (!$scope.isHidden) {
                    alert($scope.backMess[0].message+"\n"+"\n"+"The receiverName is "+$scope.data.receiverName);
                  }
                });
                promise.error(function(data,status,headers,config,statusText){
                    $scope.backMess="There appears to have been a problem .";
                    alert($scope.backMess);
                });
            }
});
queryModule.controller('aboutController',function($scope){
  var aboutData={
    StudentId:'1314080901111'
  };
  $scope.aboutData=aboutData;
});
queryModule.controller('contentController',function($scope){
  var someData = {
                saleList: '销售订单',
                listType: '订单类型',
                listDate: new Date(2015, 10, 20),
                commitDate:new Date(2015,10,20),
                listID:'订单编号',
                listState:'订单状态',
                remarks:'备注'
              };
              $scope.data=someData;
});


queryModule.filter('stripDashes', function() {
     return function(txt) {
         // filter code would go here
 }; });

queryModule.directive("myProvider", function () {
    return {
        restrict: "AE",
        replace: true,
        templateUrl: 'directives/provider.html'

    }
}).directive("myHide", function () {
    return {
        restrict: "AE",
        replace: true,
        templateUrl: 'directives/hide.html'
    }
}).directive("myNav", function () {
    return {
        restrict: "AE",
        replace: true,
        templateUrl: 'directives/nav.html'
    }
}).directive("myShow", function () {
    return {
        restrict: "AE",
        replace: true,
        template: '<div id="main"><div ng-view></div></div>'
    }
});