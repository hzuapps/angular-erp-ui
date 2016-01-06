// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var Processingflow = angular.module('Processingflow', []);

// use the myAppModule variable to
// configure the module with a controller
Processingflow.controller('ProcessingflowCtrl', function ($scope) {
// function MyFilterDemoCtrl($scope) {
        var someData = {
          id: '待处理流程编号',
          name: '名称',
          operation: '操作',
          fitness: '状态',
          details:'明细',
          instructions:'批示',
        };
        $scope.data = someData;
        $scope.isHidden = true;
        $scope.showInput = function(){
          $scope.isHidden = !$scope.isHidden;
        }
        $scope.showTextarea = function () {
          $scope.isHidden = !$scope.isHidden;
        }
    }
       // controller code would go here
);
 

// use the myAppModule variable to
// configure the module with a filter
Processingflow.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
      }; 
});