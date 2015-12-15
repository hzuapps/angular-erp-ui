// create a new module called 'purchasingGroupDelModule' and save 
// a reference to it in a variable called purchasingGroupDelModule 
var purchasingGroup1 ={
	groupName:'Name',
	groupID  :'Id'
};
var purchasingGroupDelModule = angular.module('purchasingGroupDelModule', []);

// use the purchasingGroupDelModule variable to
// configure the module with a controller
purchasingGroupDelModule.factory("purchasingGroupService",function($http){
	var getpurchasingGroupData={};
	getpurchasingGroupData.getData=function(){
		var promise=$http({
			url:"json/purchasingGroup1.json",
			method:"get",
		});
		return promise;
	}
	return getpurchasingGroupData;

})
purchasingGroupDelModule.controller('purchasingGroupDelCtrl', function ($scope,purchasingGroupService) {
       // controller code would go here
         var promise=purchasingGroupService.getData();
      promise.success(function(data,status){
      	var purchasingGroupdata1=purchasingGroup1;
      	purchasingGroupdata1.groupName=data["groupName"];
      	purchasingGroupdata1.groupID=data["groupID"];
         $scope.data =purchasingGroupdata1; 
      }
);
    }
);

// use the purchasingGroupDelModule variable to
// configure the module with a filter
purchasingGroupDelModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });

purchasingGroupDelModule.config(function ($routeProvider) {
  // configure the routes
  $routeProvider
    // route for the about page
        .when('/about', {
          templateUrl: 'pages/about.html'
        });
    });
