var danjumingxiModule = angular.module('danjumingxiModule', ['ngRoute']);
  danjumingxiModule.config(function ($routeProvider) {
     $routeProvider
         .when('/', {
             templateUrl: 'pages/danjumingxi.html',
             controller: 'danjumingxiCtrl'
         })
         .when('/contact', {
             templateUrl: 'pages/home.html'
         })
         .when('/home', {
             templateUrl: 'pages/danjumingxi.html',
             controller: 'danjumingxiCtrl'
         })
         .when('/about', {
             templateUrl: 'pages/about.html',
             controller: 'aboutCtrl'
         });
         });
   danjumingxiModule.factory('danjumingxiModuleService',function($http){
         var getsomedata = {};
         getsomedata.getData = function () {
             var promise = $http({method: "GET",url: "danjumingxi.json"});
             return promise;
         }
         return getsomedata;
     })
     .controller('danjumingxiCtrl', function ($scope,danjumingxiModuleService) {
       var danjumingxi = {
             No: '001',
             code: 'xidada',
             name: '110120119',
             model: 'MX5',
             specifications:'100*100*100',
             unit:'1',
             number: 100
        };
        $scope.data = danjumingxi; 
     var promise=danjumingxiModuleService.getData();
         promise.success(function (data, status, headers, config, statusText) {
             $scope.print = data.danjumingxiData;
         });
         promise.error(function(data,status){
            alert('error');
         });
         }).controller('aboutCtrl', function ($scope) {
         var xuehao = {num: 1314080901140};
         $scope.data = xuehao;
  });
 danjumingxiModule.filter('stripDashes', function(){
 return function(txt) {}; 
 });