// create a new module called 'salesIncomeModule' and save 
// a reference to it in a variable called salesIncomeModule 
var providerModule = angular.module('providerModule', ['ngRoute']);

// use the salesIncomeModule variable to
// configure the module with a controller
providerModule.config(function ($routeProvider) {
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
providerModule.factory('providerService',function($http){
        var dataStroe = {};
        dataStroe.doRegistration = function (theData) {
            var promise = $http({method: 'POST',url: 'json/message.json',data: theData});
            return promise;
        }
        return dataStroe;
    });
providerModule.controller('inputCtrl', function ($scope, providerService) {
       // controller code would go here
        $scope.providerArray = {
            UnitName: 'a',
            CollectMode: 'b',
            CollectDay: 123,
            jingshouren: ' ',
            shoukuanyue: 123,
            shoukuanzhanghu:123,
            yinhangzhnanghu:123,
            zhuangtai:' ',
            hexiaoyue:123,
            beizhu:' '
        };
        $scope.isHidden = true;
        $scope.showInput = function () {
            $scope.isHidden = !$scope.isHidden;
        }
        $scope.provider = {};
        $scope.register = function () {
            var promise = providerService.doRegistration($scope.provider);
            promise.success(function (data, status, headers, config, statusText) {
                $scope.backMess = data.success;
                $scope.isHidden = !$scope.isHidden;
                if(!$scope.isHidden){
                    alert($scope.backMess[0].message + "\n" + "\n" + "Your providerId is " + $scope.provider.Id);
                }
            });
            promise.error(function (data, status, headers, config, statusText) {
                $scope.backMess = '对不起，提交失败了 T^T';
                    alert($scope.backMess);
                
            });
        }
}).controller('aboutCtrl', function ($scope) {
    var aboutData = {
        num: '1314080901237'
    };
    $scope.aboutData = aboutData;
}).controller('contentCtrl', function ($scope) {
    $scope.providerArray = [{
            UnitName: 'a',
            CollectMode: 'b',
            CollectDay: 123,
            jingshouren: ' ',
            shoukuanyue: 123,
            shoukuanzhanghu:123,
            yinhangzhnanghu:123,
            zhuangtai:' ',
            hexiaoyue:123,
            beizhu:' '
    }];
});

// use the salesIncomeModule variable to
// configure the module with a filter
salesIncomeModule.filter('stripDashes', function () {
    return function (txt) {
        // filter code would go here
    };
});// javascript.js 
providerModule.directive("myProvider", function () {
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