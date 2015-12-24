// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var rejectRequestModule = angular.module('rejectRequestModule', ['ngRoute']);

// use the myAppModule variable to
// configure the module with a controller

rejectRequestModule.config(function($routeProvider){
  
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
.when('/input',{
  templateUrl:'page/input.html',
  controller:'inputController'
})
.when('/content',{
  templateUrl:'page/content.html',
  controller:'contentController'
});
});

rejectRequestModule.factory('providerService',function($http){
  var dataSvc={};
  dataSvc.getData=function(theData){
    var promise=$http({method: 'POST',url: 'json/message.json',data: theData});
    return promise;
  }
  return dataSvc;
});
rejectRequestModule.controller("inputController",function($scope,providerService){
          var someData = {
              category: '安装费',
              department:'人事',
              receiverName:'赵日天',
              costDateString:new Date(2015, 10, 22),
              total:'666',
              remark:'cool'
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
                prowamise.error(function(data,status,headers,config,statusText){
                    $scope.backMess="There appears to have been a problem .";
                    alert($scope.backMess);
                });
            }
});
rejectRequestModule.controller('aboutController',function($scope){
  var aboutData={
    StudentId:'1314080901141'
  };
  $scope.aboutData=aboutData;
});
rejectRequestModule.controller('contentController',function($scope){
  var someData = {
              category: '安装费',
              department:'人事',
              receiverName:'赵日天',
              costDateString:new Date(2015, 10, 22),
              total:'666',
              remark:'cool',
              };
              $scope.data=someData;
});


rejectRequestModule.filter('stripDashes', function() {
     return function(txt) {
         // filter code would go here
 }; });

rejectRequestModule.directive("myProvider", function () {
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