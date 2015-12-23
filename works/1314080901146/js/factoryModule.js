
// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var factoryModule = angular.module('factoryModule', ['ngRoute']);

factoryModule.config(function ($routeProvider) {
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
factoryModule.factory('factoryService', function ($http) {
	var dataStroe = {};
    dataStroe.doRegistration = function (theData) {
            var promise = $http({method: 'POST',url: 'json/message.json',data: theData});
            return promise;
        }
        return dataStroe;
    });
	
factoryModule.controller('inputCtrl', function ($scope,factoryService) {
       // controller code would go here
	 $scope.factoryArray = {
              factoryName: 'kaixin',
              factoryNum:  '001',
			  factoryLocation: 'GuangDong',
			  factoryDescription: '信誉良好',
        };
		$scope.isHidden = true;
        $scope.showInput = function () 
		{
            $scope.isHidden = !$scope.isHidden;
        }
		$scope.factory = {};
        $scope.register = function () {
            var promise = factoryService.doRegistration($scope.factory);
            promise.success(function (data, status, headers, config, statusText) {
                $scope.backMess = data.success;
                $scope.isHidden = !$scope.isHidden;
                if(!$scope.isHidden){
                    alert($scope.backMess[0].message + "\n" + "\n" + "Your factoryNum is " + $scope.factoryNum);
                }
            });
            promise.error(function (data, status, headers, config, statusText) {
                $scope.backMess = 'sorry ！提交失败';
                alert($scope.backMess);              
            });
        }
}).controller('aboutCtrl', function ($scope) {
    var aboutData = {
        num: '1314080901146'
    };
    $scope.aboutData = aboutData;
}).controller('contentCtrl', function ($scope) {
    $scope.factoryArray = [{
        factoryName: 'kaixin',
         factoryNum:  '001',
		 factoryLocation: 'GuangDong',
		 factoryDescription: '信誉良好'
    }];
 });
// use the myAppModule variable to
// configure the module with a filter
factoryModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; 
});
factoryModule.directive("myFactory", function () {
    return {
        restrict: "AE",
        replace: true,
        templateUrl: 'directives/factory.html'

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
