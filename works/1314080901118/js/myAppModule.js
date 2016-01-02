// create a new module called 'myAppModule' & save 
// a reference to it in a variable called myAppModule 
var myAppModule = angular.module('myAppModule', ['ngRoute']);
myAppModule.config(function ($routeProvider) {
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
myAppModule.factory('providerService', function ($http) 
       // controller code would go here
 {
 var dataStroe = {};
       dataStroe.doRegistration = function (theData) {
            var promise = $http({method: 'POST',url: 'json/message.json',data: theData});
            return promise;
        }
        return dataStroe;
    });

myAppModule.controller('inputCtrl', function ($scope, providerService){

        $scope.providerArray = 
      {
            Pno: 't0001',
            Sort: 'coms',
            Name: '锁存器',
            Size: '74ls273',
            Color: '黑',
            Unit:' ',
            Num:0,
            Other:' '
        };
    $scope.isHidden = true;
    $scope.showInput  = function () {
    $scope.isHidden = !$scope.isHidden;
    }


    $scope.provider = {};
        $scope.register = function () {
           var promise = providerService.doRegistration($scope.provider);
            promise.success(function (data, status, headers, config, statusText) {
                $scope.backMess = data.success;
               $scope.isHidden = !$scope.isHidden;
                if(!$scope.isHidden){
                    alert($scope.backMess[0].message + "\n" + "\n" + "你的商品编号是： " + $scope.Pno);
                }
            });
            promise.error(function (data, status, headers, config, statusText) {
                $scope.backMess = '出了问题，请重新提交！';
                alert($scope.backMess);
            });
        } 
}).controller('aboutCtrl', function ($scope) {
    var aboutData = {
        num: '13 计 1 18'
    };
        $scope.aboutData = aboutData;
}).controller('contentCtrl', function ($scope) {
    $scope.providerArray = [{
            Pno: 't0001',
            Sort: 'coms',
            Name: '锁存器',
            Size: '74ls273',
            Color: '黑',
            Unit:' ',
            Num:0,
            Other:' '
    }];
});
// use the myAppModule variable to
// configure the module with a filter
myAppModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
    };

});
myAppModule.directive("myProvider", function () {
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