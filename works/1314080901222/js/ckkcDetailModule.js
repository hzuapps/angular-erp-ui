// create a new module called 'ckkcDetailModule' and save 
// a reference to it in a variable called ckkcDetailModule 

var ckkcDetailModule = angular.module("ckkcDetailModule", ['ngRoute']);
ckkcDetailModule.config(function ($routeProvider) {
    // configure the routes
    $routeProvider
        .when('/', {
            // route for the about page
            templateUrl: 'pages/home.html'
        })
        .when('/home', {
            templateUrl: 'pages/home.html'
        })
        .when('/ckkc', {
            templateUrl: 'pages/ckkc.html',
            controller: 'ckkcDetailCtrl'
        })
        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'aboutCtrl'
        });
});

// use the myAppModule variable to
// configure the module with a controller
ckkcDetailModule.factory('ckkcDetailService',function($http){
        var dataStroe = {};
        dataStroe.getData = function () {
            var promise = $http({method: 'GET',url: 'json/ckkc.json'});
            return promise;
        }
        return dataStroe;
    }).controller('ckkcDetailCtrl', function ($scope,ckkcDetailService) {
       // controller code would go here
        var ckkcDetail = {
            sousuo:'a ',
            cangku:'a ',
            kcqd:'a '
        };
        $scope.data = ckkcDetail;
        $scope.items = [
       {
            xuhao: '1',
            bianma: '1',
            ming: 'yifu',
            leibie:'man',
            xinghao: 'm',
            yanse: 'red',
            shuliang: '1',
            danwei: 'jian',
            danjia:'100'
        },
        {
          xuhao: '2',
            bianma: '2',
            ming: 'yifu',
            leibie:'man',
            xinghao: 'l',
            yanse: 'yellow',
            shuliang: '1',
            danwei: 'jian',
            danjia:'100'
        },
        {
           xuhao: '3',
            bianma: '3',
            ming: 'yifu',
            leibie:'man',
            xinghao: 'xl',
            yanse: 'blue',
            shuliang: '1',
            danwei: 'jian',
            danjia:'100'
        }
        ];
        var promise = ckkcDetailService.getData();
        promise.success(function (data, status, headers, config, statusText) {
            $scope.backMess = data.ckkcDetailData;
        });
        promise.error(function(data,status){
           alert('«Î«Û≥ˆ¥Ì£¨«Î÷ÿ ‘');
        });
    }).controller('aboutCtrl', function ($scope) {
        var data = {
            num: '1314080901222'
        };
        $scope.data = data;
});

// use the myAppModule variable to
// configure the module with a filter
ckkcDetailModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });