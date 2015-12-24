// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var news_TemplateModule = angular.module('news_TemplateModule', []);

// use the myAppModule variable to
// configure the module with a controller
news_TemplateModule.factory('news_TemplateService', function ($http) {
    var dataStroe = {};
    dataStroe.newData = function (theData) {
        var promise = $http({method: 'post',url: 'json/message.json',data: theData});
        return promise;
    }
    return dataStroe;
}).controller('news_Template',function ($scope,news_TemplateService){
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

         $scope.news = {};
         $scope.register = function () {
             var promise = news_TemplateService.newData($scope.news);
             promise.success(function (data, status, headers, config, statusText) {
                 $scope.backMess = data.success;
                 $scope.isHidden = !$scope.isHidden;
                 if(!$scope.isHidden){
                    alert($scope.backMess[0].message + "\n" + "\n" + "Your newId is " + $scope.news.template_Name);
                 }
             });
             promise.error(function (data, status, headers, config, statusText) {
                 $scope.backMess = data.error;
                 $scope.isHidden = !$scope.isHidden;
                 if(!$scope.isHidden){
                     alert($scope.backMess[0].message);
                 }
             });
         }
 });

// use the myAppModule variable to
// configure the module with a filter
news_TemplateModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
