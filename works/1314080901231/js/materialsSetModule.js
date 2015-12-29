     // create a new module called 'materialsSetModule' and save 
 // a reference to it in a variable called materialsSetModule 
 var materialsSetMoudle = angular.module('materialsSetMoudle', []);
 
 // use the materialsSetModule variable to
 // configure the module with a controller
 materialsSetMoudle.controller('materialsSetCtrl', function ($scope) {
        // controller code would go here

		var materialsSet = {
                typeName: '°å²Ä',
                typeCode: 'bc'
            };
            $scope.data = materialsSet;
			
            $scope.items = [
				{ typeName: '°å²Ä',typeCode: 'bc'},
				{ typeName: 'Îå½ð',typeCode: 'wj'},
				{ typeName: 'Ä¾Æ¤',typeCode: 'mp'}£¬
				{ typeName: 'µÆ¾ß',typeCode: 'dj'},
				{ typeName: 'ÓÍÆá',typeCode: 'yq'},
				{ typeName: '½ÂÁ´ ',typeCode: 'jl'}
             ];
     }
 );
 
 // use the materialsSetModule variable to
 // configure the module with a filter
 materialsSetMoudle.filter('stripDashes', function() {
     return function(txt) {
         // filter code would go here
 }; });