// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var materialModule = angular.module('materialModule', ['ngRoute']);

materialModule.config(function ($routeProvider) {
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
materialModule.factory('materialService', function ($http) {
    var dataStroe = {};
    dataStroe.doRegistration = function (theData) {
        var promise = $http({method: 'POST', url: 'json/message.json', data: theData});
        return promise;
    }
    return dataStroe;
});

materialModule.controller('inputCtrl', function ($scope, materialService) {
    // controller code would go here
    $scope.materialArray = {
        wuliaoLeibie: '五金',
        wuliaoName: '螺丝',
        updatedDate: '2015-12-20',
        pingyinMa: 'someNum',
        wuliaoMiaoshu: '及格品'
    };
    $scope.isHidden = true;
    $scope.showInput = function () {
        $scope.isHidden = !$scope.isHidden;
    }
    $scope.material = {};
    $scope.register = function () {
        var promise = materialService.doRegistration($scope.material);
        promise.success(function (data, status, headers, config, statusText) {
            $scope.backMess = data.success;
            $scope.isHidden = !$scope.isHidden;
            if (!$scope.isHidden) {
                alert($scope.backMess[0].message + "\n" + "\n" + "Your wuliaoLeibie is " + $scope.wuliaoLeibie);
            }
        });
        promise.error(function (data, status, headers, config, statusText) {
            $scope.backMess = 'sorry! the submitted request is failed';
            alert($scope.backMess);
        });
    }
}).controller('aboutCtrl', function ($scope) {
    var aboutData = {
        num: '1314080901139'
    };
    $scope.aboutData = aboutData;
}).controller('contentCtrl', function ($scope) {
    $scope.materialArray = [{
        wuliaoLeibie: '五金',
        wuliaoName: '螺丝',
        updatedDate: '2015-12-20',
        pingyinMa: 'someNum',
        wuliaoMiaoshu: '及格品'
    }];
});

// use the myAppModule variable to
// configure the module with a filter
materialModule.filter('stripDashes', function () {
    return function (txt) {
        // filter code would go here
    };
});

materialModule.directive("myProvider", function () {
    return {
        restrict: "AE",
        replace: true,
        templateUrl: 'directives/material.html'

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