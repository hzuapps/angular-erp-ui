// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var chaxundingdanModule = angular.module('chaxundingdanModule', ['ngRoute']);
 
 chaxundingdanModule.config(function ($routeProvider) {
     // configure the routes
     $routeProvider
         .when('/', {
             // route for the about page
             templateUrl: 'pages/home.html'
         })
         .when('/home', {
             templateUrl: 'pages/home.html'
         })
         .when('/input', {
             templateUrl: 'pages/input.html',
             controller: 'inputCtrl'
         })
         .when('/about', {
             templateUrl: 'pages/about.html',
             controller: 'aboutCtrl'
         })
         .when('/content', {
             templateUrl: 'pages/content.html',
             controller: 'contentCtrl'
         });
 });
// use the myAppModule variable to
// configure the module with a controller
chaxundingdanModule.factory('chaxundingdanService', function ($http) {
     var dataStroe = {};
     dataStroe.doRegistration = function (theData) {
         var promise = $http({method: 'POST', url: 'json/message.json', data: theData});
         return promise;
     }
     return dataStroe;
 });
 
 chaxundingdanModule.controller('inputCtrl', function ($scope, chaxundingdanService) {
     // controller code would go here
     $scope.chaxundingdanArray = {
         
         
     };
     $scope.isHidden = true;
     $scope.showInput = function () {
         $scope.isHidden = !$scope.isHidden;
     }
     $scope.chaxundingdan = {};
     $scope.register = function () {
         var promise = chaxundingdanService.doRegistration($scope.chaxundingdan);
         promise.success(function (data, status, headers, config, statusText) {
             $scope.backMess = data.success;
              $scope.isHidden = !$scope.isHidden;
			   if (!$scope.isHidden) {
                 alert($scope.backMess[0].message + "\n" + "\n" );
             }
         });
         promise.error(function (data, status, headers, config, statusText) {
             $scope.backMess = '失败';
             alert($scope.backMess);
         });
     }
 }).controller('aboutCtrl', function ($scope) {
     var aboutData = {
         num: '销售-查询订单'
     };
     $scope.aboutData = aboutData;
 }).controller('contentCtrl', function ($scope) {
     $scope.chaxundingdanArray = [{
         Startdate: '2002-02-02',
         Terminationdate: '2003-03-03',
         state: '未完成',
         
     }];
  });
  
  // use the myAppModule variable to
  // configure the module with a filter
  chaxundingdanModule.filter('stripDashes', function () {
    return function (txt) {
          // filter code would go here
		  };
 });
 
chaxundingdanModule.directive("mychaxundingdan", function () {
     return {
         restrict: "AE",
         replace: true,
         templateUrl: 'directives/chaxundingdan.html'
 
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
 