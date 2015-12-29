// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var documentsDetailModule = angular.module('documentsDetailModule', []);

// use the myAppModule variable to
// configure the module with a controller
documentsDetailModule.controller('MyFilterDemoCtrl', function ($scope) {
       // controller code would go here
        var documentsDetail = {
            ID: 'AAA',
            Storage: '001',
            Hand: 'Amy',
            Handing date: '2015-10-24',
            State: 'finished',
            REmark:'good',
            
        };
        $scope.data = documentsDetail;
         $scope.isHidden = true;
        $scope.showInput = function () {
            $scope.isHidden = !$scope.isHidden;
        }
        $scope.provider = {};
        $scope.register = function () {
            var promise = providerService.doRegistration($scope.provider);
            promise.success(function (data, status, headers, config, statusText) {
                $scope.backMess = data.success;
                $scope.isHidden = !$scope.isHidden;
                if(!$scope.isHidden){
                    alert($scope.backMess[0].message + "\n" + "\n" + "Your providerId is " + $scope.provider.Id);
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
documentsDetailModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
