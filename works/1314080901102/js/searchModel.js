// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var providerModule = angular.module('searchModule', ['ngRoute']);

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
        var promise = $http({method: 'POST', url: 'json/message.json'});
        return promise;
    }
    return dataStroe;
});

providerModule.controller('inputCtrl', function ($scope, providerService) {
    // controller code would go here
    $scope.providerArray = {
        
        
    };
    $scope.isHidden = true;
    $scope.showInput = function () {
        $scope.isHidden = !$scope.isHidden;
    }
    $scope.provider = {};
    $scope.register = function () {
        var promise = providerService.doRegistration();
        promise.success(function (data, status, headers, config, statusText) {
            $scope.backMess = data.success;
            $scope.isHidden = !$scope.isHidden;
            if (!$scope.isHidden) {
                alert($scope.backMess[0].message + "\n" + "\n" );
            }
        });
        promise.error(function (data, status, headers, config, statusText) {
            $scope.backMess = '对不起，提交失败';
            alert($scope.backMess);
        });
    }
}).controller('aboutCtrl', function ($scope) {
    var aboutData = {
        num: '财务-销售收款-查询选项'
    };
    $scope.aboutData = aboutData;
}).controller('contentCtrl', function ($scope) {
    $scope.searchArray = [{
        Startdate: '2002-02-02',
        Terminationdate: '2003-03-03',
        state: '未完成',
        
    }];
});

// use the myAppModule variable to
// configure the module with a filter
providerModule.filter('stripDashes', function () {
    return function (txt) {
        // filter code would go here
    };
});

providerModule.directive("mySearch", function () {
    return {
        restrict: "AE",
        replace: true,
        templateUrl: 'directives/search.html'

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