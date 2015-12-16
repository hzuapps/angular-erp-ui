// create a new module called 'materialsSetModule' and save 
// a reference to it in a variable called itemListModule
 var materialSetModule = angular.module('materialSetModule', []);
 
// use the materialSetModule variable to
// configure the module with a controller
materialSetModule.controller('materialSetCtrl', function ($scope)
    {
        var materialSet = {
                typeName: '板材',
                typeCode: 'bc'
            };
			
            $scope.data = materialSet;
			
            $scope.items = [
				{ typeName: '板材',typeCode: 'bc'},
				{ typeName: '五金',typeCode: 'wj'},
				{ typeName: '木皮',typeCode: 'mp'},
				{ typeName: '灯具',typeCode: 'dj'},
				{ typeName: '油漆',typeCode: 'yq'},
				{ typeName: '铰链 ',typeCode: 'jl'}
             ];
    }
);
 
 // use the materialSetModule variable to
 // configure the module with a filter
materialSetModule.filter('materialSetstripDashes', function() {
     return function(txt) {
         // filter code would go here
    }; });