// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var myAppModule = angular.module('Template_Add_Parameter_Module', []);

// use the myAppModule variable to
// configure the module with a controller
myAppModule.controller('MyFilterDemoCtrl', function ($scope) {
       var ParameterMessage = {
          Name: '参数名',
          Code: '代码',
          ParameterData: '参数值'
      };
      $scope.data = ParameterMessage;
       // controller code would go here
    }
);

// use the myAppModule variable to
// configure the module with a filter
myAppModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });