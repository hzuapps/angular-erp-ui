// create a new module called 'chaxundanModule' and save 
// a reference to it in a variable called chaxundanModule 
var chaxundanModule = angular.module('chaxundanModule', ['ngRoute']);

chaxundanModule.config(function ($routeChaxundan) {
    // configure the routes
    $routeChaxundan
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

// use the chaxundanModule variable to
// configure the module with a controller
chaxundanModule.factory('chaxundanService', function ($http) {
    var dataStroe = {};
    dataStroe.doRegistration = function (theData) {
        var promise = $http({method: 'POST', url: 'json/message.json', data: theData});
        return promise;
    }
    return dataStroe;
});

chaxundanModule.controller('inputCtrl', function ($scope, chaxundanService) {
    // controller code would go here
    $scope.chaxundanArray = {
                 chaxundanUnitname:'wwx',
	         chaxundanPaymentmethod:'支付宝',
	         chaxundanPaymentdate:'2015-10-20',
	         chaxundanMiddleman:'wwx',
	         chaxundanPaymentamount:'wwx',
	         chaxundanPaymentaccount:'wwx',
	         chaxundanBankaccount:'wwx',
	         chaxundanState:'wwx',
	         chaxundanWriteoffamount:'wwx',
	         chaxundanRemarks:'wwx'
    };
    $scope.isHidden = true;
    $scope.showInput = function () {
        $scope.isHidden = !$scope.isHidden;
    }
    $scope.chaxundan = {};
    $scope.register = function () {
        var promise = chaxundanService.doRegistration($scope.chaxundan);
        promise.success(function (data, status, headers, config, statusText) {
            $scope.backMess = data.success;
            $scope.isHidden = !$scope.isHidden;
            if (!$scope.isHidden) {
                alert($scope.backMess[0].message + "\n" + "\n" + "Your chaxundanUnitname is " + $scope.chaxundanUnitname);
            }
        });
        promise.error(function (data, status, headers, config, statusText) {
            $scope.backMess = 'Sorry,your submission has failed!!!';
            alert($scope.backMess);
        });
    }
}).controller('aboutCtrl', function ($scope) {
    var aboutData = {
        num: '1314080901230'
    };
    $scope.aboutData = aboutData;
}).controller('contentCtrl', function ($scope) {
    $scope.chaxundanArray = [{
                 chaxundanUnitname:'wwx',
	         chaxundanPaymentmethod:'支付宝',
	         chaxundanPaymentdate:'2015-10-20',
	         chaxundanMiddleman:'wwx',
	         chaxundanPaymentamount:'wwx',
	         chaxundanPaymentaccount:'wwx',
	         chaxundanBankaccount:'wwx',
	         chaxundanState:'wwx',
	         chaxundanWriteoffamount:'wwx',
	         chaxundanRemarks:'wwx'
    }];
});

// use the chaxundanModule variable to
// configure the module with a filter
chaxundanModule.filter('stripDashes', function () {
    return function (txt) {
        // filter code would go here
    };
});

chaxundanModule.directive("myChaxundan", function () {
    return {
        restrict: "AE",
        replace: true,
        templateUrl: 'directives/chaxundan.html'

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
