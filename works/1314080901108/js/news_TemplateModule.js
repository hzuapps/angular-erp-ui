// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var news_TemplateModule = angular.module('news_TemplateModule', ['ngRoute']);
news_TemplateModule.config(function ($routeProvider) {
    // configure the routes
    $routeProvider
        .when('/', {
            // route for the about page
            templateUrl: 'pages/home.html'
        })
        .when('/home', {
            templateUrl: 'pages/home.html'
        })
        .when('/input',{
            templaterUrl: 'pages/input.html',
            controller: 'inputCtrl'
        })
        .when('/content', {
            templateUrl: 'pages/content.html',
            controller: 'contentCtrl'
        })
        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'aboutCtrl'
        });
});

// use the myAppModule variable to
// configure the module with a controller
news_TemplateModule.factory('news_TemplateService', function ($http) {
    var dataStroe = {};
    dataStroe.newData = function (theData) {
        var promise = $http({method: 'post',url: 'json/message.json',data: theData});
        return promise;
    }
    return dataStroe;
});
news_TemplateModule.controller('inputCtrl',function ($scope,news_TemplateService){
       // controller code would go here
    $scope.Project_Template = {
             template_Name: 'czg',
             other_Name: 'xca',
             news_People: 'admin',
             type: '木材',
             price: '2000',
         };
         $scope.isHidden = true;
         $scope.showInput = function () {
            $scope.isHidden = !$scope.isHidden;
         }

         $scope.news = {};
         $scope.register = function () {
             var promise = news_TemplateService.newData($scope.news);
             promise.success(function (data, status, headers, config, statusText) {
                 $scope.backMess = data.success;
                 $scope.isHidden = !$scope.isHidden;
                 if(!$scope.isHidden){
                    alert($scope.backMess[0].message + "\n" + "\n" + "Your newId is " + $scope.news.template_Name);
                 }
             });
             promise.error(function (data, status, headers, config, statusText) {
                 $scope.backMess = '提交失败';
                     alert($scope.backMess);
                 
             });
         }
         }).controller('aboutCtrl', function ($scope) {
            var aboutData = {
                num: '1314080901108'
            };
            $scope.aboutData = aboutData;
 }).controller('contentCtrl',function ($scope){
    $scope.Project_Template = [{
             template_Name: 'czg',
             other_Name: 'xca',
             news_People: 'admin',
             type: '木材',
             price: '2000',
    }];
 });

// use the myAppModule variable to
// configure the module with a filter
news_TemplateModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
news_TemplateModule.directive("myNews", function () {
     return {
         restrict: "AE",
         replace: true,
         templateUrl: 'directives/news.html'
 
     }
 }).directive("myHide", function () {
     return {
         restrict: "AE",
         replace: true,
         templateUrl: 'directives/hide.html'
     }
 }).directive("myNav",function(){
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