// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var feiyongdanModule = angular.module('feiyongdanModule', []);

// use the myAppModule variable to
// configure the module with a controller
feiyongdanModule.controller('feiyongdanCtrl', function ($http,$scope) {
        $http.get("feiyongdan_JSON.txt").success(function(someData){
        $scope.data=someData;
       });
     })
           

// use the myAppModule variable to
// configure the module with a filter
feiyongdanModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
