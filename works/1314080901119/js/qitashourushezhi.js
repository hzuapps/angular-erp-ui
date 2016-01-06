// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var qitashourushezhiModule = angular.module('qitashourushezhiModule', ['ngRoute']);

qitashourushezhiModule.config(function ($routeProvider) {
    // configure the routes
    $routeProvider
        .when('/', {
            // route for the about page
            templateUrl: 'pages/home.html'
        })
        .when('/home', {
            templateUrl: 'pages/home.html'
        })
        .when('/contact', {
            templateUrl: 'pages/documents.html',
            controller: 'qitashourushezhiCtrl'
        })
        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'aboutCtrl'
        });
});

// use the myAppModule variable to
// configure the module with a controller
 qitashourushezhiModule.factory('qitashourushezhiService',function($http){
        var dataStroe = {};
        dataStroe.getData = function () {
            var promise = $http({method: "GET",url: "json/data.json"});
            return promise;
        }
        return dataStroe;
    }).controller('qitashourushezhiCtrl', function ($scope,qitashourushezhiService) {
       // controller code would go here
 
        var promise = qitashourushezhiService.getData();
         promise.success(function (data, status, headers, config, statusText) {
             $scope.qtdata = data.qitashourushezhiData;
         });
         promise.error(function(data,status){
            alert('请求出错，请重试');
         });
 
 });

// use the myAppModule variable to
// configure the module with a filter
qitashourushezhiModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; 
});