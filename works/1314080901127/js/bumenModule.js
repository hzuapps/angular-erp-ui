var bumenModule = angular.module('bumenModule', []);

// use the myAppModule variable to
// configure the module with a controller
bumenModule.controller('MyFilterDemoCtrl', function ($scope,$http) {
       var promise=$http({
               url:"json/phm.json",
                method:"get",
              });
        promise.success(function(data,status){
        alert(status);
 
          var bu = {
            name: '123',
            code: '123',
            workernumber: '3',
        };
          $scope.data =bu;
           $scope.isHidden = true;
         $scope.show = function(){
             $scope.isHidden = !$scope.isHidden;
             }
       });
       promise.error(function(data,status){
         alert(status);
       });
        // controller code would go here
     
      }
  );


// use the myAppModule variable to
// configure the module with a filter
bumenModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
