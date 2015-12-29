// javascript.js
// create a new module called 'myMaterialsModule' and save 
// a reference to it in a variable called myMaterialsModule 
 var myMaterialsModule = angular.module("myMaterialsModule",[]);
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
            myNumber: '213',
            Data:'2015-12-06',
            Sort:'wujin',
            Fullname:'nice',
            Code:'phone', 
            Homepage:'intel',
            Simplename:'easy',
            theArea:'China',
            Synposis:'office'
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