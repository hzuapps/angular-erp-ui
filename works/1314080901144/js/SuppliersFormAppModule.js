// create a new module called 'myAppModule' and save
// a reference to it in a variable called myAppModule
var SuppliersFormAppModule = angular.module('SuppliersFormAppModule', []);

// use the myAppModule variable to
// configure the module with a controller+queryModule.controller('MyFilterDemoCtrl', function ($scope,$http) {
 
SuppliersFormAppModule.controller('MyFilterDemoCtrl', function ($scope,$http) {
      var promise=$http({
              url:"json/zjh.json",
               method:"get",
             });
       promise.success(function(data,status){
       alert(status);
          var listData = {
        shoukuanyue1:'wujin',
        shoukuanyue2:'5756336',
        shoukuanyue3:'2015',
        shoukuanyue4:'5456',
        shoukuanyue5:'54567',
        shoukuanyue6:'123',
        shoukuanyue:'159',
        shoukuanyue8:'555',
        shoukuanyue9:'2222'
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
SuppliersFormAppModule.filter('SuppliersFormstripDashes', function() {
    return function(txt) {
        // filter code would go here
    }; });


