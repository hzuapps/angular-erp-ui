// javascript.js
// create a new module called 'myMaterialsModule' and save 
// a reference to it in a variable called myMaterialsModule 
 var supplierModule = angular.module("supplierModule",['ngRoute']);

supplierModule.config(function($routeProvider){
  
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

 supplierModule.factory('supplierService',function($http) {
        var dataStroe = {};
        dataStroe.doRegistration= function (theData){
            var promise = $http({method: 'POST',url:'json/information.json',data: theData});
            return promise;
        }
        return dataStroe;
    })
    supplierModule.controller("inputController",function($scope,supplierService){
        var supplierData = {
            supplierNumber: '213',
            Filingdate:'2015-12-06',
            supplierSort:'wujin',
            supplierFullname:'nice',
            Code:'phone', 
            supplierHomepage:'intel',
            supplierSimplename:'easy',
            supplierArea:'China',
            supplierSynposis:'office'
        };
        var data=supplierData;
        $scope.isHidden = true;
        
        
        $scope.register = function () {
        var promise = supplierService.doRegistration ($scope.supplier);
        promise.success(function (data, status, headers, config, statusText) {
                $scope.backMess = data.success;
                $scope.isHidden = !$scope.isHidden;
                if(!$scope.isHidden){
                alert($scope.backMess[0].information + "\n" + "\n" + "Your supplierNumber is " + $scope.supplierNumber);
                }
            });
            promise.error(function (data, status, headers, config, statusText) {
                  $scope.backMess="There appears to have been a problem .";
                    alert($scope.backMess);
            });
        }
}).controller('aboutController',function($scope){
  var aboutData={
    xuehao:'1314080901201 曾雨婷'
  };
  $scope.aboutData=aboutData;
}).controller('contentController',function($scope){
$scope.someData = [{
            supplierNumber: '213',
            Filingdate:'2015-12-06',
            supplierSort:'wujin',
            supplierFullname:'nice',
            Code:'phone', 
            supplierHomepage:'intel',
            supplierSimplename:'easy',
            supplierArea:'China',
            supplierSynposis:'office'
              }];
});
supplierModule.filter('stripDashes', function() {
     return function(txt) {
         // filter code would go here
 }; });

supplierModule.directive("myProvider", function () {
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
