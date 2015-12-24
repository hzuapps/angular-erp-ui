// javascript.js
// create a new module called 'myMaterialsModule' and save 
// a reference to it in a variable called myMaterialsModule 
 var myMaterialsModule = angular.module("myMaterialsModule",['ngRoute']);
 
myMaterialsModule.config(['$routeProvider',
         function($routeProvider) {
            $routeProvider.
               when('/about', {
                  templateUrl: 'pages/about.html',
                  //controller: 'myWebsiteController'
               }).
               when('/content', {
                  templateUrl: 'pages/content.html',
                  //controller: 'myWebsiteController'
               }).
               when('/home', {
                  templateUrl: 'pages/home.html',
                  //controller: 'aboutMeController'
               }).
               otherwise({
                  redirectTo: '/about'
               });
         }]);

 myMaterialsModule.factory('myMaterialsService',function($http) {
        var dataStroe = {};
        dataStroe.doRegistration= function (theData){
            var promise = $http({method: 'POST',url:'json/information.json',data: theData});
            return promise;
        }
        return dataStroe;
    })
    .controller("Myfilter",function($scope,myMaterialsService){
        var myMaterialsData = {
            Sort:'wujin',
            myName: 'tie',
            Data:'2015-12-23',
            Code:'phone',
            Fullname:'nice',
            Synposis:'first' 
            
            
        };
        $scope.data=myMaterialsData;
        $scope.isHidden = true;
        $scope.showInput=function(){
        	$scope.isHidden=!$scope.isHidden;
        }
        
        $scope.myMaterials = {};
        $scope.register = function () {
        var promise = myMaterialsService.doRegistration ($scope.myMaterials);
        promise.success(function (data, status, headers, config, statusText) {
                $scope.backMess = data.success;
                $scope.isHidden = !$scope.isHidden;
                if(!$scope.isHidden){
                alert($scope.backMess[0].information + "\n" + "\n" + "Your myMaterialsId is " + $scope.myMaterials.Id);
                }
            });
            promise.error(function (data, status, headers, config, statusText) {
                $scope.backMess = data.error;
                $scope.isHidden = !$scope.isHidden;
                if(!$scope.isHidden){
                    alert($scope.backMess[0].information);
                }
            });
        }
});
myMaterialsModule.filter('stripDashes',function(){
    return function(txt){
        //filter code would go here
    };
});