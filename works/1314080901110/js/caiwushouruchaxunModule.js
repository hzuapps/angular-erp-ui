// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var caiwushouruchaxunModule = angular.module('caiwushouruchaxunModule', ['ngRoute']);

caiwushouruchaxunModule.config(function ($routeProvider) {
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
caiwushouruchaxunModule.factory('caiwushouruchaxunService', function ($http) {
    var dataStroe = {};
    dataStroe.doRegistration = function (theData) {
        var promise = $http({method: 'POST', url: 'json/message.json', data: theData});
        return promise;
    }
    return dataStroe;
});

caiwushouruchaxunModule.controller('inputCtrl', function ($scope, caiwushouruchaxunService) {
    // controller code would go here
    $scope.caiwushouruchaxunArray = {
        
        
    };
    $scope.isHidden = true;
    $scope.showInput = function () {
        $scope.isHidden = !$scope.isHidden;
    }
    $scope.caiwushouruchaxun = {};
    $scope.register = function () {
        var promise = caiwushouruchaxunService.doRegistration($scope.caiwushouruchaxun);
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
        num: '财务-其他收入-查询选项表单'
    };
    $scope.aboutData = aboutData;
}).controller('contentCtrl', function ($scope) {
    $scope.caiwushouruchaxunArray = [{
        Startdate: '2002-02-02',
        Terminationdate: '2003-03-03',
        state: '未完成',
        
    }];
});

// use the myAppModule variable to
// configure the module with a filter
caiwushouruchaxunModule.filter('stripDashes', function () {
    return function (txt) {
        // filter code would go here
    };
});

caiwushouruchaxunModule.directive("myCaiwushouruchaxun", function () {
    return {
        restrict: "AE",
        replace: true,
        templateUrl: 'directives/caiwushouruchaxun.html'

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