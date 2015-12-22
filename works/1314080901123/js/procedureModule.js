var procedureModule = angular.module('procedureModule', []);

procedureModule.factory('procedureModuleService',function($http){
     var procedureData={};
     procedureData.getData=function(){
            var promise=$http({
              url:"json/Database.json",
              method:"GET"
            });
            return promise;
      }
      return procedureData;
}).controller('procedureModuleDemoCtrl',function($scope,procedureModuleService){
  var promise=procedureModuleService.getData();
          promise.success(function(data,status, headers, config, statusText){
          $scope.theOrderDatas = data.ProcessData;
           });
     promise.error(function(data,status){
           alert(status);
           alert("请求出现错误！");
     });
});
PaymentDetailsModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });