var postDataModule = angular.module('postDataModule', []);

// use the myAppModule variable to
// configure the module with a controller

postDataModule.controller('MyFilterDemoCtrl', function ($scope,$http) {
       var promise=$http({
               url:"json/operationData.json",
               method:"get",
             });
       promise.success(function(data,status){
       alert(status);
          var listData = {
            department: 'JENNA',
            name: 'GRANT',
            level: 'JENNA',
            type: 'JENNA',
            salary: '100',
            duty: 'GRANT'
        };
          $scope.data = listData;
          $scope.isHidden = true;
        $scope.show = function(){
            $scope.isHidden = !$scope.isHidden;
        }
    });
    promise.error(function(data,status){
         alert(status);
       });
        
}
);

// use the myAppModule variable to
// configure the module with a filter
postDataModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
