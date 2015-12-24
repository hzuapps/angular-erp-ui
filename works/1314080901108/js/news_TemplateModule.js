// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var news_TemplateModule = angular.module('news_TemplateModule', []);

// use the myAppModule variable to
// configure the module with a controller
news_TemplateModule.controller('news_TemplateModuleDemoCtrl', function ($scope) {
       // controller code would go here
var Project_Template = {
             template_Name: 'czg',
             other_Name: 'xca',
             news_People: 'admin',
             type: 'mucai',
             price: '2000',
         };
         $scope.data = Project_Template;
         $scope.isHidden = true;
         $scope.showInput = function () {
            $scope.isHidden = !$scope.isHidden;
         }
    }
);

// use the myAppModule variable to
// configure the module with a filter
news_TemplateModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
