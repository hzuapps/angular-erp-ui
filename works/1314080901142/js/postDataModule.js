var postDataModule = angular.module('postDataModule', ['ngRoute']);

// use the myAppModule variable to
// configure the module with a controller

postDataModule.config(function($routeProvider){
  
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

postDataModule.factory('providerService',function($http){
  var dataSvc={};
  dataSvc.getData=function(theData){
    var promise=$http({method: 'POST',url: 'json/operationData.json',data: theData});
    return promise;
  }
  return dataSvc;
});

postDataModule.controller("inputController", function ($scope,providerService) {
          var someData = {
            department: 'JENNA',
            name: 'GRANT',
            level: 'JENNA',
            type: 'JENNA',
            salary: '100',
            duty: 'GRANT'
        };
          $scope.data = someData;
          $scope.isHidden = true;
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

postDataModule.controller('aboutController',function($scope){
  var aboutData={
    StudentId:'1314080901142'
  };
  $scope.aboutData=aboutData;
});
postDataModule.controller('contentController',function($scope){
  var someData = {
                department: 'JENNA',
            name: 'GRANT',
            level: 'JENNA',
            type: 'JENNA',
            salary: '100',
            duty: 'GRANT'
              };
              $scope.data=someData;
});

// use the myAppModule variable to
// configure the module with a filter
postDataModule.filter('stripDashes', function() {
     return function(txt) {
         // filter code would go here
 }; });

postDataModule.directive("myProvider", function () {
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
