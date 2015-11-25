// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var materialListModule = angular.module('materialListModule', []);

// use the myAppModule variable to
// configure the module with a controller
materialListModule.controller('MyFilterDemoCtrl', function ($scope) {

        var someData = {
            num: 'MWJ010000001',
            type: 'wujing',
            name: 'ee',
            model: 'd',
            color: 'red'   
        };
        $scope.data = someData;

       // controller code would go here
    $scope.data = someData;
    $scope.items = [
            {num: 'MWJ010000001',type: 'wujing',name: 'ee',model:"d" ,color: "red"},
            {num: 'MWJ010000002',type: 'wujing',name: 'ee',model: "",color: "blue"}
            ];
  }
);

// use the myAppModule variable to
// configure the module with a filter
materialListModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
    }; 
});