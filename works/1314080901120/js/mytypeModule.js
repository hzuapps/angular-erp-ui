// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var mytypeModule = angular.module('mytypeModule', ['ngRoute']);

mytypeModule.config(function ($routeProvider) {
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
            templateUrl: 'pages/mytype.html',
            controller: 'mytypeCtrl'
        })
        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'aboutCtrl'
        });
});

// use the myAppModule variable to
// configure the module with a controller
mytypeModule.factory('mytypeService',function($http){
        var dataStroe = {};
        dataStroe.getData = function () {
            var promise = $http({method: 'GET',url: 'json/data.json'});
            return promise;
        }
        return dataStroe;
    }).controller('mytypeCtrl', function ($scope,mytypeService) {
       // controller code would go here
        var mytype = {
             type: '类型1',
            price: '5',
            number: '10',
            money: '50',
            idcard:'0001'
        };
        $scope.data = mytype;
        $scope.items = [
          {type: '类型1',price: '5',number: '10',money: '50',idcard: '0001'} 
        ];
        var promise = mytypeService.getData();
        promise.success(function (data, status, headers, config, statusText) {
            $scope.backMess = data.mytypeData;
        });
        promise.error(function(data,status){
           alert('请求出错，请重试');
        });
    }).controller('aboutCtrl', function ($scope) {
        var data = {
            num: '1314080901120'
        };
        $scope.data = data;
});

// use the myAppModule variable to
// configure the module with a filter
mytypeModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
