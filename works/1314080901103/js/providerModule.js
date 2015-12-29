// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var providerModule = angular.module('providerModule', ['ngRoute']);

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

// use the myAppModule variable to
// configure the module with a controller
providerModule.factory('providerService', function ($http) {
    var dataStroe = {};
    dataStroe.doRegistration = function (theData) {
        var promise = $http({method: 'POST', url: 'json/message.json', data: theData});
        return promise;
    }
    return dataStroe;
});

providerModule.controller('inputCtrl', function ($scope, providerService) {
    // controller code would go here
    $scope.providerArray = {
        providerId: '001',
        providerFullName: 'intel',
        providerSimpName: 'intel',
        providerType: 'computer',
        providerIntroduce: 'fashionable product',
        providerAddress: 'China'
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
            if (!$scope.isHidden) {
                alert($scope.backMess[0].message + "\n" + "\n" + "Your providerId is " + $scope.providerId);
            }
        });
        promise.error(function (data, status, headers, config, statusText) {
            $scope.backMess = '对不起，提交失败了 T^T';
            alert($scope.backMess);
        });
    }
}).controller('aboutCtrl', function ($scope) {
    var aboutData = {
        num: '1314080901103'
    };
    $scope.aboutData = aboutData;
}).controller('contentCtrl', function ($scope) {
    $scope.providerArray = [{
        providerId: '001',
        providerFullName: 'intel',
        providerSimpName: 'intel',
        providerType: 'computer',
        providerIntroduce: 'fashionable product',
        providerAddress: 'China'
    }];
});

// use the myAppModule variable to
// configure the module with a filter
providerModule.filter('stripDashes', function () {
    return function (txt) {
        // filter code would go here
    };
});

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