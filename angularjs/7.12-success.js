promise.success(function (data, status) {
   $scope.successMessage = ""
   	+ "Your transaction identifier is " 
   	+ data.transactionID;
   $scope.showSuccessMessage = true;
});
