// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var myAppModule = angular.module('supplierInformationModule', []);

// use the myAppModule variable to
// configure the module with a controller
myAppModule.controller('MyFilterDemoCtrl', function ($scope) {
// function MyFilterDemoCtrl($scope) {
        var someData = {
          id: '待处理流程编号',
          name: '流程名称',
          operation: '操作',
          fitness: '状态',
          dateJoined: new Date(2010, 2, 23),
        };
        $scope.data = someData;
    }
       // controller code would go here
);
 

// use the myAppModule variable to
// configure the module with a filter
myAppModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });