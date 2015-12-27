// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var newShoppinglistModule = angular.module('newShoppinglistModule', []);

// use the myAppModule variable to
// configure the module with a controller
newShoppinglistModule.factory('newShoppinglistService',function($http){
         var dataStroe = {};
         dataStroe.getData = function () {
             var promise = $http({method: 'GET',url: 'json/data.json'});
             return promise;
         }
         return dataStroe;
     }).controller('MyFilterDemoCtrl', function ($scope,newShoppinglistService) {
       // controller code would go here
        var promise = newShoppinglistService.getData();
         promise.success(function (data, status, headers, config, statusText) {
             $scope.datas = data.NewShoppinglist;
         });
         promise.error(function(data,status){
            alert('请求出错，请重试');
         });
    }

);

// use the myAppModule variable to
// configure the module with a filter
newShoppinglistModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
