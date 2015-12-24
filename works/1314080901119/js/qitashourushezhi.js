
// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var qitashourushezhiModule = angular.module('qitashourushezhiModule', []);

// use the myAppModule variable to
// configure the module with a controller
 qitashourushezhiModule.factory('qitashourushezhiService',function($http){
        var dataStroe = {};
        dataStroe.getData = function () {
            var promise = $http({method: 'GET',url: 'json/data.json'});
            return promise;
        }
        return dataStroe;
    }).controller('qitashourushezhiFilter', function ($scope,qitashourushezhiService) {// controller code would go here
        var qitashourushezhi = {
            code: '001',
            type: 'weikuan',
            other:'wu'
        };
        $scope.data = qitashourushezhi;
        $scope.items = [
            {code: '001',type: 'weikuan',other:'wu'},
            {code: '002',type: 'dingjin',other:'wu'},
            {code: '003',type: 'fenqifukuan',other:'wu'} 
        ];
        var promise = qitashourushezhiService.getData();
         promise.success(function (data, status, headers, config, statusText) {
             $scope.backMess = data.qitashourushezhiData;
         });
         promise.error(function(data,status){
            alert('请求出错，请重试');
         });
 });

// use the myAppModule variable to
// configure the module with a filter
qitashourushezhiModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });