// create a new module called 'chaxundanModule' & save 
	// a reference to it in a variable called chaxundanModule 
	var chaxundanModule = angular.module('chaxundanModule', []);
	
	// use the chaxundanModule variable to
	// configure the module with a controller
	chaxundanModule.factory('chaxundanService',function($http){
		 var dataStroe = {};
                 dataStroe.doRegistration = function (theData) {
                 var promise = $http({method: 'POST',url: 'json/message.json',data: theData});
                 return promise;
        }
        return dataStroe;
    }).controller('MyFilter', function ($scope,chaxundanService) {
	       // controller code would go here
	     var chaxundanData = {
	         chaxundanUnitname:'wwx',
	         chaxundanPaymentmethod:'支付宝',
	         chaxundanPaymentdate:'2015-10-20',
	         chaxundanMiddleman:'wwx',
	         chaxundanPaymentamount:'wwx',
	         chaxundanPaymentaccount:'wwx',
	         chaxundanBankaccount:'wwx',
	         chaxundanState:'wwx',
	         chaxundanWriteoffamount:'wwx',
	         chaxundanRemarks:'wwx'
	       };
	          $scope.data = chaxundanData;
                  $scope.isHidden = true;
                  $scope.showInput = function () {
                  $scope.isHidden = !$scope.isHidden;
        }
        $scope.chaxundan = {};
        $scope.register = function () {
            var promise = chaxundanService.doRegistration($scope.chaxundan);
            promise.success(function (data, status, headers, config, statusText) {
                $scope.backMess = data.success;
                $scope.isHidden = !$scope.isHidden;
                if(!$scope.isHidden){
                    alert($scope.backMess[0].message + "\n" + "\n" + "Your chaxundanUnitname is " + $scope.chaxundan.Unitname);
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
chaxundanModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
