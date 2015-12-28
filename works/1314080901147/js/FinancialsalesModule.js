// create a new module called 'myAppModule' and save     Financialsales1Data Financialsales1  Financialsales 
// a reference to it in a variable called myAppModule 
var FinancialsalesModule = angular.module('FinancialsalesModule', ['ngRoute']);

FinancialsalesModule.config(function ($routeProvider) {
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
            templateUrl: 'pages/Financialsales.html',
            controller: 'FinancialsalesCtrl'
        })
        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'aboutCtrl'
        });
});

// use the myAppModule variable to
// configure the module with a controller



FinancialsalesModule.factory('Financialsales1Service',function($http){
        var dataStroe = {};
        dataStroe.getData = function () {
            var promise = $http({method: 'GET',url: 'json/Financialsales.json'});
            return promise;
        }
        return dataStroe;


    }).controller('FinancialsalesCtrl', function ($scope,Financialsales1Service) {
       // controller code would go here

        // var Financialsales1 = {
        //     orderNumber:'123',
        //     ordername:'123',
        //     summary:'abc',
        //     moneyed:'123',
        //     money:'123',
        //     beizhu:'abc',
        // };
        // $scope.data = Financialsales1;

        

        var promise = Financialsales1Service.getData();
        promise.success(function (data, status, headers, config, statusText) {
            $scope.shuju = data.FinancialsalesData;
        });
        promise.error(function(data,status){
           alert('请求出错，请重试');
        });
    }).controller('aboutCtrl', function ($scope) {

        var data = {
            xuehao: '邹远潮 计科一班 1314080901147'
        };
        $scope.data = data;

});

// use the myAppModule variable to
// configure the module with a filter


FinancialsalesModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
