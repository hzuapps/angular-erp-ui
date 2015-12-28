
// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var FinancialsalesModule = angular.module('FinancialsalesModule', []);

// use the myAppModule variable to
// configure the module with a controller
FinancialsalesModule.factory('saleService', function ($http) {
	var datasale = {};
        datasale.getdata = function (theData) {
            var promise = $http({method: 'POST',url: 'json/message.json',data: theData});
            return promise;
        }
        return datasale;
    }).controller('MyFilter', function ($scope,saleService) {
       // controller code would go here
	var FinancialsalesData = {
             orderNumber:'123',
            ordername:'123',
            summary:'abc',
            moneyed:'123',
            money:'123',
            beizhu:'abc',
        };
        $scope.data = FinancialsalesData;
		$scope.isHidden = true;
        $scope.showInput = function () 
		{
            $scope.isHidden = !$scope.isHidden;
        }
		$scope.Financialsales = {};
        $scope.register = function () {
            var promise = saleService.getdata ($scope.Financialsales);
            promise.success(function (data, status, headers, config, statusText) {
                $scope.backMess = data.success;
                $scope.isHidden = !$scope.isHidden;
                if(!$scope.isHidden){
                    alert($scope.backMess[0].message + "\n" );
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
FinancialsalesModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });