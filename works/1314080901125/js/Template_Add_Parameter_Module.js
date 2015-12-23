// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var myAppModule = angular.module('Template_Add_Parameter_Module', ['ngRoute']);

myAppModule.config(function ($routeProvider) {
    // configure the routes
    $routeProvider
        .when('/', {
            // route for the  pages
            templateUrl: 'pages/home.html'
        })
        .when('/home', {
            templateUrl: 'pages/home.html'
        })
        .when('/input', {
            templateUrl: 'pages/input.html',
            controller: 'inputCtrl'
        })
        .when('/list', {
            templateUrl: 'pages/list.html',
            controller: 'listCtrl'
        })
        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'aboutCtrl'
        });
});

// use the myAppModule variable to
// configure the module with a controller
myAppModule.factory('Service',function ($http) {
    var dataStroe = {};
    dataStroe.doRegistration = function (theData) {
      var promise = $http({method: 'POST',url: 'json/message.json', data: theData});
      return promise;
    }
    return dataStroe;
});


myAppModule.controller('inputCtrl', function ($scope,Service) {
      // controller code would go here
      $scope.ParameterArray = {
          Name: '长度',
          Code: '01',
          ParameterData: '25',
          Note: '表示默认模块长度'
          };
      $scope.isHidden = true;
      $scope.showInput = function () {
        $scope.isHidden = !$scope.isHidden;
        }
      $scope.create = {};
      $scope.register = function () {
        var promise = Service.doRegistration($scope.create);
        promise.success(function (data, status, headers, config, statusText) {
          $scope.backMess = data.success;
          $scope.isHidden = !$scope.isHidden;
          if (!$scope.isHidden) {
            alert($scope.backMess[0].message + "\n" + "\n" + "Your Parameter is " + $scope.Name);
            }
        });

        promise.error(function (data, status, headers, config, statusText) {
          $scope.backMess = '提交失败了~';
          alert($scope.backMess);
        });
    }

}).controller('aboutCtrl', function ($scope) {
  var aboutData = {
    ID: '1314080901125',
    Class: '计算机1班'
    };
  $scope.aboutData = aboutData;
}).controller('listCtrl', function ($scope) {
  $scope.ParameterArray = [{
    Name: '长度',
    Code: '01',
    ParameterData: '25',
    Note: '表示默认模块长度'
    }];
});    

// use the myAppModule variable to
// configure the module with a filter
myAppModule.filter('stripDashes', function () {
    return function (txt) {
        // filter code would go here
    }; 
});

myAppModule.directive("myCreate", function () {
      return {
        restrict: "AE",
        replace: true,
        templateUrl: 'mains/create.html'
      }
}).directive("myHide", function () {
    return {
        restrict: "AE",
        replace: true,
        templateUrl: 'mains/hide.html'
    }
}).directive("myNav", function () {
    return {
        restrict: "AE",
        replace: true,
        templateUrl: 'mains/nav.html'
    }
}).directive("myShow", function () {
    return {
        restrict: "AE",
        replace: true,
        template: '<div id="main"><div ng-view></div></div>'
    }
});