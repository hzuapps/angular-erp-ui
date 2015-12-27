// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var danjumingxiModule = angular.module('danjumingxiModule', []);

// use the myAppModule variable to
// configure the module with a controller
   danjumingxiModule.factory('danjumingxiModuleService',function($http){
         var getsomedata = {};
         getsomedata.getData = function () {
             var promise = $http({method: "GET",url: "danjumingxi.json"});
             return promise;
         }
         return getsomedata;
     }).controller('danjumingxiFilter', function ($scope,danjumingxiModuleService) {
       // controller code would go here
       var danjumingxi = {
             No: '001',
             code: 'xidada',
             name: '110120119',
             model: 'MX5',
             specifications:'100*100*100',
             unit:'件',
             number: 100
        };
        $scope.data = danjumingxi;
        $scope.items = [
             {No: '001',code: '001',name: 'abc',model: 'MX5',color: 'red',unit: 'kg',number: 99,length: 2,width: 1,thickness: 1.5},
             {No: '001',code: '001',name: 'cba',model: 'MX5',color: 'red',unit: 'kg',number: 99,length: 2,width: 1,thickness: 1.5},
             {No: '001',code: '001',name: 'dsa',model: 'MX5',color: 'red',unit: 'kg',number: 99,length: 2,width: 1,thickness: 1.5} 
        ];
    }
);
     var promise=danjumingxiModuleService.getData();
         promise.success(function (data, status, headers, config, statusText) {
             $scope.backMess = data.danjumingxiData;
         });
         promise.error(function(data,status){
            alert('出现错误，请重试');
         });

// use the myAppModule variable to
// configure the module with a filter