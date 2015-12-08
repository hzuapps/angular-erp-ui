// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var myAppModule = angular.module('myAppModule', []);

// use the myAppModule variable to
// configure the module with a controller
myAppModule.controller('MyFilterDemoCtrl', function ($scope) {

        var someData = {
            department: '行政',
            job_name: '岗位',
            job_level: '层次',
            job_type: '类型',
            salary: '5000',
            job_statement:'职责'
        };
        $scope.mydata = someData;

        $scope.isHidden=true;
        $scope.showInput=function(){
            $scope.isHidden=!$scope.isHidden;
        }
    }
);

// use the myAppModule variable to
// configure the module with a filter
myAppModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });