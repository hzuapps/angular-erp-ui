// create a new module called 'myMaterial' and save 
// a reference to it in a variable called myMaterial 
var myMaterial = angular.module('myMaterialModule', []);
// use the myMaterial variable to
// configure the module with a controller
myMaterial.controller('MyFilterDemoCtrl', function ($scope) {
       // controller code would go here
       var Material = {
       	"name" : "abc"
       }
       $scope.data = Material;
    }
);

// use the myMaterial variable to
// configure the module with a filter
myMaterial.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });