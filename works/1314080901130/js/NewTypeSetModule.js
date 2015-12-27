// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var NewTypeSetModule = angular.module('NewTypeSetModule', ['ngRoute']);

NewTypeSetModule.config(function ($routeProvider) {
     // configure the routes
     $routeProvider
         .when('/', {
             // route for the about page
             templateUrl: 'pages/home.html'
         })
         .when('/home', {
             templateUrl: 'pages/home.html'
         })
         .when('/contact', {
             templateUrl: 'pages/items.html',
             controller: 'MyFilterDemoCtrl'
         })
         .when('/about', {
             templateUrl: 'pages/about.html',
             controller: 'aboutCtrl'
         });
});

// use the myAppModule variable to
// configure the module with a controller
NewTypeSetModule.factory('myService',function($http){
         var dataStroe = {};
         dataStroe.getData = function () {
             var promise = $http({method: 'GET',url: 'json/data.json'});
             return promise;
        }
         return dataStroe;
     }).controller('MyFilterDemoCtrl', function ($scope,myService) {
       // controller code would go here
       var NewTypeSet = {
            Name: '五金',
            Code: 'wj',
        };
        $scope.data = NewTypeSet;
    	/*$scope.items = [
            
             {typeName: '钢材',typecode: 'gc'},
             {typeName: '玻璃',typecode: 'bl'},
             ];
        */
        var promise = myService.getData();
        promise.success(function (data, status, headers, config, statusText) {
            $scope.items = data.items;
        });
        promise.error(function(data,status){
            alert('请求出错，请重试');
        });
}).controller('aboutCtrl',function ($scope,myService) {
       // controller code would go here
       var data = {
             num: '1314080901130'
        };
        $scope.data = data;

});

// use the myAppModule variable to
// configure the module with a filter
NewTypeSetModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });