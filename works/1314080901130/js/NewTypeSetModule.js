// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var NewTypeSetModule = angular.module('NewTypeSetModule', []);

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
    }
);

// use the myAppModule variable to
// configure the module with a filter
NewTypeSetModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });