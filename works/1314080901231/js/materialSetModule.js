// create a new module called 'materialsSetModule' and save 
// a reference to it in a variable called itemListModule
 var materialSetModule = angular.module('materialSetModule', []);
 
// use the materialSetModule variable to
// configure the module with a controller
materialSetModule.controller('materialSetCtrl', function ($scope,$http)
    {
        var materialSet = {
                typeName: '板材',
                typeCode: 'bc'
            };
			
			var promise=$http({
                url:"materialSet_JSON.json",
                method:"get"
            });
			
            promise.success(function(data,status){
				
				
                $scope.items = [{typeName: data[0].typeName, typeCode: data[0].typeCode},
								{typeName: data[1].typeName, typeCode: data[1].typeCode},
								{typeName: data[2].typeName, typeCode: data[2].typeCode},
								{typeName: data[3].typeName, typeCode: data[3].typeCode},
								{typeName: data[4].typeName, typeCode: data[4].typeCode}];
            });
			
            				$scope.data = materialSet;

			
    }
);
 
 // use the materialSetModule variable to
 // configure the module with a filter
materialSetModule.filter('materialSetstripDashes', function() {
     return function(txt) {
         // filter code would go here
    }; });