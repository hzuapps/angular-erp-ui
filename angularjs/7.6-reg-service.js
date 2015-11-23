var module = angular.module('myapp', []);
module.factory('memberDataStoreService', function ($http) {
	var memberDataStore = {};
	memberDataStore.doRegistration = function (theData) {
		var promise = $http({
			method: 'POST', 
			url: 'memberservices/register', 
			data: theData
		}); 
		return promise;
	}
	return  memberDataStore;
});
